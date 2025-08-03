import { Controller, Get, Session, Post, Body, Req, Res, Query } from '@nestjs/common';
import { CasaService } from './casa/casa.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly casaService: CasaService
    ) { }
    
    // LoginMetodo
    @Post('login')
    async login(
        @Body() login: { username: string; password: string; rest: boolean; },
        @Session() session: Record<string, any>,
        @Res() res: any
    ) { // Using @Session() decorator
        try {
        // buscamos al usuario
        const respuesta = await this.casaService.buscarUnoPorUsername(login.username);

        // Verificamos que el password sea el mismo
        if (respuesta && respuesta.password === login.password ) {
            session.user = {
                ...respuesta
            };
            // Si es rest respondemos con un JSON
            if (login.rest) {
                res.json({
                    mensaje: 'Usuario logeado exitosamente'
                });
            }
            // Si es una peticion normal redirigimos a la pantalla de sesion
            res.redirect('/auth/vista-casas');
        } else {
            res.redirect('/auth/login-vista?mensaje="Usuario y password no coinciden"');
        }
        } catch (e) {
            console.error(`Error al buscar usuario: ${e.message}`);
            res.redirect('/auth/login-vista?mensaje="Usuario no encontrado"');
        }
    }

    // Eliminar la sesion
    @Get('logout')
    logout(
        @Req() req: any,
        @Res() res: any
    ) {
        req.session.destroy((err: any) => {
            if (err) {
                console.error('Error destroying session:', err);
            }
        });
        res.redirect('/auth/login-vista')
    }

    @Get('login-vista')
    async loginVista(
        @Res() res: any,
        @Query() query: { mensaje?: string },
    ) {
        res.render('login', {
            mensaje: query.mensaje ?? ''
        });
    }

    @Get('sesion')
    async sesion(
        @Res() res: any,
        @Session() session: Record<string, any>
    ) { // Using @Session() decorator
        let casa: any = {};
        // Si hay username continuamos
        if (session?.user?.username) {
            // buscamos la sesion
            try {
                casa = await this.casaService.buscarUnoPorUsername(session.user.username);
            } catch (e) {
                // si no hay sesion no hacemos nada            
                console.error('No se encontro usuario:', e.message);
            }
        }
        // sino renderizamos
        res.render('sesion', {
            casa,
        });
    }

    @Get('vista-casas')
    async vistaCasas(
        @Res() res: any,
        @Session() session: Record<string, any>
    ) {
        // Verificamos si hay una sesion activa
        if (!session.user) {
            return res.redirect('/auth/login-vista');
        }

        // Buscamos las casas del usuario
        const casas = await this.casaService.obtenerTodos();
        res.render('casas', {
            casas
        });
    }
}