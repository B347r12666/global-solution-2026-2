import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({ email: "", senha: "" });

  function atualizarCampo(event) {
    const { name, value, checked, type } = event.target;
    setForm((anterior) => ({
      ...anterior,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function enviarFormulario(event) {
    event.preventDefault();
    setErro("");

    if (!form.email.trim() || !form.senha) {
      setErro("Preencha seu e-mail e sua senha para continuar.");
      return;
    }

    try {
      await login(form.email, form.senha);
      navigate("/");
    } catch (err) {
      console.log(err);

      if (err.response) {
        const { detail } = err.response.data;
        setErro(detail);

        return;
      }

      setErro("Erro de servidor. Tente novamente mais tarde");
    }
  }

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[minmax(380px,0.92fr)_minmax(500px,1.08fr)] bg-cor-de-fundo text-titulo font-sans box-border *:box-border">
      <section
        className="relative isolate overflow-hidden flex flex-col justify-between min-h-screen py-11 px-[clamp(36px,5vw,82px)] pb-8.5 bg-[radial-gradient(ellipse_at_8%_88%,rgba(229,56,59,0.24),transparent_40%),linear-gradient(145deg,#251b1d_0%,#3b171e_50%,#720e20_100%)] max-lg:hidden"
        aria-label="Apresentação do Colosys"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-3 w-fit text-[27px] font-[850] tracking-[-1.3px] text-inherit no-underline"
          aria-label="Colosys — página inicial"
        >
          <span className="w-10.5 h-10.5 grid place-items-center rounded-[13px] text-white text-[18px] bg-linear-to-br from-vermelho-claro to-vermelho-escuro shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <i className="fa-solid fa-route" />
          </span>
          <span>
            Colosys Argos<span className="text-[#f05b61]">.</span>
          </span>
        </Link>

        <div className="relative z-10 max-w-137.5 my-16 mx-0 mb-20">
          <span className="inline-flex items-center gap-2.5 text-[#ff9a9e] text-[10px] font-extrabold tracking-[2px]">
            <span className="w-1.75 h-1.75 rounded-full bg-[#f05b61] shadow-[0_0_14px_#f05b61]" />{" "}
            MOBILIDADE URBANA, MAIS SIMPLES
          </span>
          <h1 className="mt-6 mb-4.5 text-[clamp(38px,4.1vw,60px)] leading-[1.06] tracking-[-2.8px] font-extrabold">
            A cidade em movimento.
            <br />
            <em className="text-[#ff777d] not-italic">Você no caminho.</em>
          </h1>
          <p className="max-w-110 text-[rgba(255,255,255,0.68)] text-[15px] leading-[1.8]">
            Planeje seus trajetos, acompanhe as linhas e tenha as informações do
            transporte público sempre com você.
          </p>

          <div className="grid gap-5.5 mt-11">
            <div className="flex items-center gap-3.75">
              <span className="w-10.75 h-10.75 grid shrink-0 place-items-center border border-[rgba(255,255,255,0.13)] rounded-[13px] bg-[rgba(255,255,255,0.08)] text-[#ff8b90]">
                <i className="fa-solid fa-route" />
              </span>
              <p className="grid gap-1 m-0">
                <strong className="text-[13px] font-bold">
                  Rotas inteligentes
                </strong>
                <small className="text-[rgba(255,255,255,0.55)] text-[11px]">
                  Encontre o melhor caminho para chegar.
                </small>
              </p>
            </div>
            <div className="flex items-center gap-3.75">
              <span className="w-10.75 h-10.75 grid shrink-0 place-items-center border border-[rgba(255,255,255,0.13)] rounded-[13px] bg-[rgba(255,255,255,0.08)] text-[#ff8b90]">
                <i className="fa-solid fa-bell" />
              </span>
              <p className="grid gap-1 m-0">
                <strong className="text-[13px] font-bold">
                  Informação em tempo real
                </strong>
                <small className="text-[rgba(255,255,255,0.55)] text-[11px]">
                  Acompanhe avisos e condições das linhas.
                </small>
              </p>
            </div>
            <div className="flex items-center gap-3.75">
              <span className="w-10.75 h-10.75 grid shrink-0 place-items-center border border-[rgba(255,255,255,0.13)] rounded-[13px] bg-[rgba(255,255,255,0.08)] text-[#ff8b90]">
                <i className="fa-solid fa-bookmark" />
              </span>
              <p className="grid gap-1 m-0">
                <strong className="text-[13px] font-bold">
                  Seus lugares favoritos
                </strong>
                <small className="text-[rgba(255,255,255,0.55)] text-[11px]">
                  Tenha seus trajetos frequentes por perto.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-[rgba(255,255,255,0.42)] text-[9px] font-bold tracking-[2px]">
          SÃO PAULO · MOBILIDADE PARA TODOS
        </div>

        <div className="absolute -z-10 border border-[rgba(255,255,255,0.08)] rotate-[-35deg] w-52.5 h-52.5 right-[5%] top-[18%] rounded-[48px]" />
        <div className="absolute -z-10 border border-[rgba(255,255,255,0.08)] rotate-[-35deg] w-32.5 h-32.5 right-[18%] top-[29%] rounded-[35px]" />
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center py-14.5 px-[clamp(30px,7vw,110px)] bg-cor-de-fundo max-lg:py-11.25 max-lg:px-11.25 max-sm:min-h-screen max-sm:py-6.75 max-sm:px-4.25">
        <div className="hidden max-sm:inline-flex items-center self-start mb-8.75 text-[23px] font-[850] tracking-[-1.3px] text-inherit no-underline">
          <span className="w-9.25 h-9.25 grid place-items-center rounded-[11px] text-white text-[16px] bg-linear-to-br from-vermelho-claro to-vermelho-escuro shadow-[0_8px_22px_rgba(0,0,0,0.22)] mr-3">
            <i className="fa-solid fa-route" />
          </span>
          <span>
            Colosys Argos<span className="text-[#f05b61]">.</span>
          </span>
        </div>

        <div className="w-full max-w-102.5 my-auto">
          <div className="mb-8.5">
            <span className="text-[#ed626b] text-[9px] font-extrabold tracking-[2px]">
              BEM-VINDO DE VOLTA
            </span>
            <h2 className="mt-3 mb-2 text-titulo text-[clamp(27px,3vw,34px)] leading-[1.15] tracking-[-1px] font-extrabold">
              Entre na sua conta
            </h2>
            <p className="m-0 text-[#a1a1aa] text-[12px] leading-[1.6]">
              Que bom ter você por aqui. Vamos seguir viagem?
            </p>
          </div>

          <form
            className="flex flex-col gap-2.5"
            onSubmit={enviarFormulario}
            noValidate
          >
            <label
              className="mt-2 text-[#e5e5e7] text-[11px] font-bold"
              htmlFor="login-email"
            >
              E-mail
            </label>
            <div className="min-h-12.25 flex items-center gap-3 px-3.75 border border-[#55565a] rounded-[10px] bg-[#414143] transition-colors duration-200 focus-within:border-vermelho-medio focus-within:shadow-[0_0_0_3px_rgba(197,44,67,0.13)]">
              <i className="fa-regular fa-envelope text-[#99999f] text-[13px]" />
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seuemail@exemplo.com"
                value={form.email}
                onChange={atualizarCampo}
                className="w-full min-w-0 h-11.75 border-0 outline-0 text-[#f4f4f5] bg-transparent text-[12px] placeholder:text-[#88888e]"
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label
                className="text-[#e5e5e7] text-[11px] font-bold"
                htmlFor="login-senha"
              >
                Senha
              </label>
            </div>
            <div className="min-h-12.25 flex items-center gap-3 px-3.75 border border-[#55565a] rounded-[10px] bg-[#414143] transition-colors duration-200 focus-within:border-vermelho-medio focus-within:shadow-[0_0_0_3px_rgba(197,44,67,0.13)]">
              <i className="fa-solid fa-lock text-[#99999f] text-[13px]" />
              <input
                id="login-senha"
                name="senha"
                type={mostrarSenha ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Digite sua senha"
                value={form.senha}
                onChange={atualizarCampo}
                className="w-full min-w-0 h-11.75 border-0 outline-0 text-[#f4f4f5] bg-transparent text-[12px] placeholder:text-[#88888e]"
              />
              <button
                className="p-1.25 border-0 text-[#99999f] bg-transparent cursor-pointer hover:text-white"
                type="button"
                onClick={() => setMostrarSenha((atual) => !atual)}
                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                <i
                  className={`fa-regular ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`}
                />
              </button>
            </div>

            {erro && (
              <p
                className="flex items-start gap-2 m-0 p-[10px_12px] border border-[rgba(255,186,8,0.25)] rounded-lg text-[#ffd777] bg-[rgba(255,186,8,0.08)] text-[10px] leading-normal"
                role="alert"
              >
                <i className="fa-solid fa-circle-info mt-0.5" />
                {erro}
              </p>
            )}

            <button
              className="w-full min-h-12.25 flex items-center justify-center gap-3 mt-1.25 border-0 rounded-[10px] text-white bg-linear-to-r from-[#a91630] to-[#d62e45] shadow-[0_9px_22px_rgba(133,12,34,0.24)] text-[12px] font-[750] cursor-pointer transition-all duration-200 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_12px_26px_rgba(133,12,34,0.32)]"
              type="submit"
            >
              Entrar <i className="fa-solid fa-arrow-right text-[11px]" />
            </button>
          </form>

          <div className="flex items-center gap-3.25 my-6.75 mb-5 text-[#88888e] text-[10px]">
            <span className="h-px flex-1 bg-[#55565a]" />
            ou
            <span className="h-px flex-1 bg-[#55565a]" />
          </div>
          <p className="m-0 text-[#a1a1aa] text-center text-[11px]">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#f07880] font-[750] no-underline hover:underline"
            >
              Criar conta
            </Link>
          </p>
          <button
            type="button"
            className="flex items-center justify-center gap-2 mx-auto mt-6.75 p-1.25 border-0 text-[#85858c] bg-transparent text-[10px] cursor-pointer hover:text-[#f07880]"
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-arrow-left" /> Voltar para o início
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;
