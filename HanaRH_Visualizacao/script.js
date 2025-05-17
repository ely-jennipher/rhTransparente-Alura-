let currentPageId = 'home-page';
let currentClienteSubPageId = null;

function showPage(pageId) {
    const oldPage = document.getElementById(currentPageId);
    if (oldPage) {
        oldPage.classList.remove('active');
    }
    const newPage = document.getElementById(pageId);
    if (newPage) {
        newPage.classList.add('active');
        currentPageId = pageId;
    }
    // Se sair da área do cliente, limpa sub-conteúdo
    if (pageId !== 'cliente-dashboard-page') {
        const clienteSubContent = document.getElementById('cliente-sub-content');
        if (clienteSubContent) clienteSubContent.innerHTML = '';
        currentClienteSubPageId = null;
    }
    window.scrollTo(0,0); // Rola para o topo
}

function submitParceria() {
    // Simula envio
    document.getElementById('parceria-form-view').style.display = 'none';
    document.getElementById('parceria-confirm-view').style.display = 'block';
}

function showCandidaturaForm(vagaTitulo) {
    document.getElementById('vaga-selecionada-titulo').innerText = `--- Vaga: ${vagaTitulo} ---`;
    document.getElementById('candidatura-form-view').style.display = 'block';
    document.getElementById('candidatura-confirm-view').style.display = 'none';
    // Limpar campos do formulário se necessário
    const form = document.getElementById('candidatura-form-fields');
    if(form) form.reset();
    showPage('candidatura-form-page');
}

function submitCandidatura() {
    document.getElementById('candidatura-form-view').style.display = 'none';
    document.getElementById('candidatura-confirm-view').style.display = 'block';
}

function requestFeedbackCode() {
    const email = document.getElementById('feedback-email').value;
    if (email) {
        document.getElementById('email-confirmado').innerText = email;
        document.getElementById('acesso-feedback-form-step1').style.display = 'none';
        document.getElementById('acesso-feedback-form-step2').style.display = 'block';
    } else {
        alert("Por favor, informe o e-mail usado na candidatura.");
    }
}

function verifyAndShowFeedback() {
    const code = document.getElementById('feedback-codigo-verif').value;
    const nomeCand = document.getElementById('feedback-email').value.split('@')[0]; // Simplesmente pega o nome do email
    if (code === "123456") { // Código simulado
        document.getElementById('nome-candidato-feedback').innerText = nomeCand || "Candidato(a)";
        showPage('feedback-display-page');
    } else {
        alert("Código de verificação inválido.");
    }
}

function requestClienteCode() {
    const email = document.getElementById('cliente-email').value;
    if (email) {
        document.getElementById('cliente-email-confirmado').innerText = email;
        document.getElementById('cliente-login-step1').style.display = 'none';
        document.getElementById('cliente-login-step2').style.display = 'block';
    } else {
        alert("Por favor, informe o e-mail empresarial.");
    }
}

function loginCliente() {
    const code = document.getElementById('cliente-codigo-verif').value;
    if (code === "654321") { // Código simulado
        showPage('cliente-dashboard-page');
        // Por padrão, pode mostrar a primeira subpágina ou nenhuma
        showClienteSubPage('cliente-minha-empresa-page'); 
    } else {
        alert("Código de verificação inválido.");
    }
}

function showClienteSubPage(subPageId, vagaContext = null) {
    const clienteSubContent = document.getElementById('cliente-sub-content');
    const subPageContent = document.getElementById(subPageId);

    if (clienteSubContent && subPageContent) {
        clienteSubContent.innerHTML = subPageContent.innerHTML;
        currentClienteSubPageId = subPageId;

        if (subPageId === 'cliente-ver-candidatos-page' && vagaContext) {
            document.querySelector('#cliente-sub-content #vaga-candidatos-titulo').innerText = vagaContext;
            populateCandidatosRH(vagaContext);
        }
    }
}

function populateCandidatosRH(vagaTitulo) {
    const listaCandidatosUl = document.querySelector('#cliente-sub-content #lista-de-candidatos-rh');
    if (!listaCandidatosUl) return;
    
    listaCandidatosUl.innerHTML = ''; // Limpa lista anterior

    // Dados mocados de candidatos
    const candidatosMock = {
        "Desenvolvedor Python Júnior": [
            { nome: "João Silva", status: "Rejeitado", cvLink: "#", feedbackGerado: true },
            { nome: "Maria Oliveira", status: "Selecionado", cvLink: "#", feedbackGerado: false },
            { nome: "Carlos Pereira", status: "Em triagem", cvLink: "#", feedbackGerado: false },
            { nome: "Ana Costa", status: "Rejeitado", cvLink: "#", feedbackGerado: true }
        ],
        "Analista de Marketing Pleno": [
            { nome: "Beatriz Lima", status: "Selecionado", cvLink: "#", feedbackGerado: false },
            { nome: "Ricardo Alves", status: "Rejeitado", cvLink: "#", feedbackGerado: true }
        ]
    };

    const candidatosDaVaga = candidatosMock[vagaTitulo] || [];

    if (candidatosDaVaga.length === 0) {
        listaCandidatosUl.innerHTML = '<li>Nenhum candidato para esta vaga ainda.</li>';
        return;
    }

    candidatosDaVaga.forEach(cand => {
        const li = document.createElement('li');
        let feedbackButton = '';
        if (cand.feedbackGerado) {
            feedbackButton = `<button type="button" onclick="verFeedbackRH('${cand.nome}', '${vagaTitulo}')">Feedback gerado</button>`;
        }

        li.innerHTML = `
            <strong>${cand.nome}</strong>
            <ul>
                <li>Status: ${cand.status}</li>
                <li>
                    <button type="button" onclick="alert('Visualizar CV de ${cand.nome}')">Ver currículo</button> | 
                    ${feedbackButton}
                    <button type="button" onclick="alert('Adicionar nota para ${cand.nome}')">Adicionar nota interna</button>
                </li>
            </ul>
        `;
        listaCandidatosUl.appendChild(li);
    });
}

function verFeedbackRH(nomeCandidato, vaga) {
    // Para simplificar, vamos usar o mesmo display de feedback do candidato
    // Em um sistema real, isso poderia ser um modal ou uma view diferente
    alert(`Simulação: Mostrando feedback para ${nomeCandidato} da vaga ${vaga}.
    (Em uma implementação completa, aqui apareceria o mesmo conteúdo que o candidato vê,
    possivelmente com opção de edição para o RH)`);
    // Poderia redirecionar para a página de feedback com os dados do candidato
    // Mas para este exemplo, um alert é suficiente para demonstrar a ação.
    // Ou, carregar o conteúdo do #feedback-display-page com os dados corretos.
    document.getElementById('nome-candidato-feedback').innerText = nomeCandidato;
    // Aqui você carregaria o feedback específico para este candidato/vaga
    // Por enquanto, vai mostrar o feedback genérico já definido.
    showPage('feedback-display-page');
}


// Mostrar a página inicial ao carregar
document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
});