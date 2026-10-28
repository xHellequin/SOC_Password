const db = JSON.parse(
    localStorage.getItem("socUsuarios") || "[]"
);

const lista = document.getElementById("lista");

function render() {

    lista.innerHTML = "";

    db.forEach((u, index) => {

        const d = document.createElement("div");

        d.className = "item";

        d.innerHTML = `
            <h3>${u.nome}</h3>

            <div class="email">
                ${u.email}
            </div>

            <div class="acoes">

                <button onclick="copiarMensagem(${index})">
                    📋 Copiar Msg
                </button>

                <button onclick="location.href='mailto:${u.email}'">
                    📧 E-mail
                </button>

                <button onclick="window.open('https://teams.microsoft.com/l/chat/0/0?users=${u.email}')">
                    💬 Teams
                </button>

                <button onclick="concluir(${index})">
                    ✅ Concluir
                </button>

            </div>

            <small>Status: ${u.status}</small>
        `;

        lista.appendChild(d);

    });

}

function copiarMensagem(index) {

    let modelo = localStorage.getItem(
        "socMensagemPadrao"
    );

    if (!modelo) {

        modelo = `🔒 Solicitação de Alteração de Senha

Olá, {NOME}.

Recebemos um alerta de segurança indicando uma possível tentativa de acesso à sua conta. Por medida preventiva, solicitamos a alteração da sua senha o quanto antes.

https://trocasenha.animaeducacao.com.br/

Após a alteração, sua conta permanecerá protegida e em conformidade com as diretrizes de segurança da organização.

E-mail registrado: {EMAIL}`;

    }

    let mensagem = modelo;
