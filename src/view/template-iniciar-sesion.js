const register = document.getElementById('root');
register.innerHTML = `<div class="iniciar-sesion-vent">
<h2>Regístrate</h2>
<input id="usarname" type="text" placeholder="Ingresa tu usuario" required>
<p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
<input id="password" type="password" placeholder="***" required>
<button id="btn-google">Google</button>
<button id="btn-correo">Continuar</button>
</div>`;
