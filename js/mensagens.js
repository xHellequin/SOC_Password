const chave =
"socMensagemPadrao";

const modelo =
document.getElementById(
"modelo"
);

modelo.value =
localStorage.getItem(chave)
||
`🔒 Solicitação de Alteração de Senha

Olá, {NOME}.

Recebemos um alerta de segurança indicando uma possível tentativa de acesso à sua conta.

https://trocasenha.animaeducacao.com.br/

Após a alteração, sua conta permanecerá protegida e em conformidade com as diretrizes de segurança da organização.`;

function salvarMensagem() {

    localStorage.setItem(
        chave,
        modelo.value
    );

    alert(
        "Mensagem salva."
    );

}