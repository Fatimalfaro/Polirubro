import formularioLogin from "../../assets/formularioLogin.png";

const Login = () => {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl bg-[#0d0d0d] border border-green-500/10 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* IMAGEN IZQUIERDA */}
        <div>
          <img
            src={formularioLogin}
            alt="Login Banner"
            className="w-full h-full object-cover"
          />
        </div>
    </div>
</section>
    );
};

export default Login;