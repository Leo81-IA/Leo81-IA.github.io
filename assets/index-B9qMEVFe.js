(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const t="Gilmara Oliveira",p="Mentoria Financeira",v="5561981736792",f="Olá, Gilmara. Quero organizar minha vida financeira com clareza, leveza e método.";function u(a=v,e=f){return`https://wa.me/${a.replace(/\D/g,"")}?text=${encodeURIComponent(e)}`}const m=u(),g=[{title:"O dinheiro some",text:"Você trabalha, recebe, paga contas e ainda assim termina o mês sem entender para onde tudo foi."},{title:"Falta planejamento",text:"As decisões financeiras acontecem no impulso, sem uma visão clara de gastos, metas e prioridades."},{title:"Dificuldade de poupar",text:"Guardar dinheiro parece impossível porque a rotina financeira ainda não tem método e constância."},{title:"Dividas e ansiedade",text:"Contas atrasadas, parcelas e preocupações tiram a paz e tornam cada escolha mais pesada."}],b=[{title:"Clareza do presente",text:"Mapeamento de ganhos, gastos, compromissos e hábitos para enxergar a realidade sem culpa."},{title:"Metodo simples",text:"Organização prática para decidir antes, separar prioridades e acompanhar o dinheiro com leveza."},{title:"Metas e reserva",text:"Construção de objetivos, reserva financeira e plano de ação possível para a sua fase de vida."},{title:"Decisoes conscientes",text:"Acompanhamento para escolher melhor, reduzir desperdícios e sustentar novos comportamentos."}],q=[{title:"Mentoria financeira individual",text:"Acompanhamento personalizado para organizar sua vida financeira com clareza, método e proximidade."},{title:"Organização financeira pessoal",text:"Estrutura para entender entradas, saídas, gastos invisíveis, dívidas e prioridades do mês."},{title:"Planejamento de metas",text:"Plano prático para transformar sonhos em objetivos financeiros com prazos, etapas e constância."},{title:"Educação financeira para mulheres e famílias",text:"Conteúdos e encontros para fortalecer autonomia, diálogo e escolhas financeiras mais saudáveis."},{title:"Palestras e workshops",text:"Experiências educativas para empresas, grupos e eventos que querem falar de dinheiro sem complicar."}],z=["Clareza sobre para onde seu dinheiro vai","Mais controle sem rigidez ou culpa","Paz para lidar com contas e prioridades","Decisoes financeiras mais conscientes","Organizacao para metas, dividas e reserva","Um caminho realista para sua vida financeira florescer"],$=[{quote:"Antes eu tinha medo de olhar para meus gastos. Com a mentoria, comecei a organizar tudo com leveza e finalmente entendi meu dinheiro.",author:"Aluna de mentoria"},{quote:"A Gilmara explica de um jeito simples, humano e prático. Saí do encontro com passos claros para tomar melhores decisões.",author:"Participante de workshop"},{quote:"O método me ajudou a parar de apagar incêndios e começar a planejar antes. Isso trouxe muita tranquilidade.",author:"Cliente de atendimento individual"}],w=[{question:"Preciso ganhar muito para fazer mentoria financeira?",answer:"Não. Educação financeira não é sobre ganhar mais a qualquer custo, mas sobre aprender a administrar melhor o que você já tem e tomar decisões mais conscientes."},{question:"A mentoria serve para quem esta endividado?",answer:"Sim. A organização das dívidas, prioridades e próximos passos faz parte do processo, sempre considerando sua realidade atual."},{question:"O atendimento e individual?",answer:"A mentoria pode ser individual e personalizada. Também há formatos para famílias, grupos, palestras e workshops."},{question:"Como comeco?",answer:"Clique no botão de WhatsApp, envie sua mensagem e conte brevemente o que você deseja organizar na sua vida financeira."}],h=document.querySelector("#app");if(!h)throw new Error("App root not found");const i={leaf:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M5 21c0-8 5-15 14-18 1 9-4 16-12 16" />
      <path d="M5 21c2-5 6-8 11-11" />
    </svg>
  `,chart:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 3 5-7" />
    </svg>
  `,wallet:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
      <path d="M16 13h.01" />
    </svg>
  `,heart:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M20.8 5.6a5.1 5.1 0 0 0-7.2 0L12 7.2l-1.6-1.6a5.1 5.1 0 1 0-7.2 7.2L12 21l8.8-8.2a5.1 5.1 0 0 0 0-7.2Z" />
    </svg>
  `,check:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  `,whatsapp:`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.3l1.1-4A8.4 8.4 0 1 1 20.5 11.8Z" />
      <path d="M9.5 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .5.1.6.4l.8 1.8c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6.2.4.7 1.1 1.5 1.7.9.8 1.7 1 2.1 1.1.2.1.4 0 .6-.2l.7-.8c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.4.4.6 0 .4-.3 1.2-.8 1.7-.6.5-1.8.8-3.7 0-3.1-1.3-5.1-4.4-5.2-4.6-.2-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.7Z" />
    </svg>
  `};function c(a="Quero organizar minha vida financeira",e="button button-primary"){return`
    <a class="${e}" href="${m}" target="_blank" rel="noopener noreferrer">
      ${i.whatsapp}
      <span>${a}</span>
    </a>
  `}function A(){const a=[i.wallet,i.chart,i.leaf,i.heart];return g.map((e,r)=>`
        <article class="insight-card">
          <span class="card-icon">${a[r]}</span>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </article>
      `).join("")}function x(){return b.map((a,e)=>`
        <article class="step-card">
          <span class="step-number">0${e+1}</span>
          <div>
            <h3>${a.title}</h3>
            <p>${a.text}</p>
          </div>
        </article>
      `).join("")}function y(){return q.map((a,e)=>`
        <article class="service-card">
          <span class="service-index">0${e+1}</span>
          <h3>${a.title}</h3>
          <p>${a.text}</p>
          <a href="${m}" target="_blank" rel="noopener noreferrer">Saiba mais...</a>
        </article>
      `).join("")}function S(){return z.map(a=>`
        <li>
          <span>${i.check}</span>
          ${a}
        </li>
      `).join("")}function M(){return $.map(a=>`
        <article class="testimonial-card">
          <p>"${a.quote}"</p>
          <span>${a.author}</span>
        </article>
      `).join("")}function j(){return w.map(a=>`
        <details class="faq-item">
          <summary>${a.question}</summary>
          <p>${a.answer}</p>
        </details>
      `).join("")}h.innerHTML=`
  <header class="site-header" aria-label="Cabeçalho principal">
    <a class="brand" href="#inicio" aria-label="${t} - início">
      <img src="/assets/gilmara/gilmara-logo.png" alt="" />
      <span>
        <strong>${t}</strong>
        <small>${p}</small>
      </span>
    </a>
    <nav class="nav" aria-label="Navegação principal">
      <a href="#sobre">Sobre</a>
      <a href="#mentoria">Mentoria</a>
      <a href="#servicos">Serviços</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#faq">FAQ</a>
    </nav>
    ${c("WhatsApp","button button-header")}
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-shade"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <img class="hero-logo" src="/assets/gilmara/gilmara-logo.png" alt="${t} - ${p}" />
          <span class="eyebrow">Mentoria financeira com método e acolhimento</span>
          <h1>Organize sua vida financeira com clareza, leveza e propósito</h1>
          <p>
            Descomplique sua relação com o dinheiro, entenda para onde ele vai e construa
            um plano possível para viver com mais segurança e tranquilidade.
          </p>
          <div class="hero-actions">
            ${c()}
            <a class="button button-secondary" href="#mentoria">Conheça a mentoria</a>
          </div>
          <ul class="hero-points" aria-label="Principais resultados esperados">
            <li>${i.check} Clareza financeira</li>
            <li>${i.check} Organização prática</li>
            <li>${i.check} Decisões conscientes</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section intro-band" aria-label="Mensagem central">
      <div class="container intro-grid">
        <p>Planejamento é decidir antes para não sofrer depois.</p>
        <div>
          <strong>Sua vida financeira também pode florescer.</strong>
          <span>Com orientação simples, constância e um método que cabe na sua rotina.</span>
        </div>
      </div>
    </section>

    <section class="section about-section" id="sobre">
      <div class="container about-grid">
        <div class="about-copy">
          <span class="eyebrow">Sobre Gilmara Oliveira</span>
          <h2>Educação financeira para transformar confusão em clareza.</h2>
          <p>
            Gilmara Oliveira é educadora financeira e mentora. Seu trabalho ajuda pessoas
            a descomplicarem a relação com o dinheiro, organizarem a rotina financeira e
            tomarem decisões com mais segurança.
          </p>
          <p>
            A mentoria une acolhimento e prática: sem julgamento, sem termos difíceis e
            com passos claros para quem quer sair do improviso e construir um futuro mais leve.
          </p>
        </div>
        <aside class="principle-panel">
          <span>${i.leaf}</span>
          <h3>Educação financeira não é sobre ganhar mais.</h3>
          <p>É sobre aprender a administrar melhor o que se tem, escolher com consciência e crescer com consistência.</p>
        </aside>
      </div>
    </section>

    <section class="section pain-section">
      <div class="container">
        <div class="section-heading centered">
          <span class="eyebrow">Talvez você se reconheça aqui</span>
          <h2>Quando falta método, o dinheiro vira preocupação.</h2>
          <p>
            Muitas pessoas pagam contas, trabalham muito e se esforçam, mas ainda sentem que
            a vida financeira está sempre no limite.
          </p>
        </div>
        <div class="insight-grid">${A()}</div>
      </div>
    </section>

    <section class="section solution-section" id="mentoria">
      <div class="container solution-grid">
        <div class="section-heading">
          <span class="eyebrow">Como a mentoria ajuda</span>
          <h2>Organize sua vida financeira com leveza e método.</h2>
          <p>
            A mentoria ajuda a organizar ganhos, gastos, metas, dívidas, reserva financeira
            e decisões conscientes. O caminho é prático, humano e possível.
          </p>
          ${c("Quero clareza sobre meu dinheiro")}
        </div>
        <div class="steps-list">${x()}</div>
      </div>
    </section>

    <section class="section services-section" id="servicos">
      <div class="container">
        <div class="section-heading centered">
          <span class="eyebrow">Serviços</span>
          <h2>Escolha o formato ideal para sua fase.</h2>
          <p>
            Atendimentos, mentorias, palestras, cursos e conteúdos para quem quer lidar com
            dinheiro de forma mais organizada e tranquila.
          </p>
        </div>
        <div class="services-grid">${y()}</div>
      </div>
    </section>

    <section class="section benefits-section">
      <div class="container benefits-grid">
        <div class="benefits-card">
          <span class="eyebrow">Benefícios</span>
          <h2>Tenha clareza sobre para onde seu dinheiro vai.</h2>
          <ul>${S()}</ul>
        </div>
        <div
          class="quote-panel"
          role="img"
          aria-label="Imagem com referência visual sobre começar a investir e construir o futuro com pequenas escolhas."
        ></div>
      </div>
    </section>

    <section class="section proof-section" id="depoimentos">
      <div class="container">
        <div class="section-heading centered">
          <span class="eyebrow">Provas sociais</span>
          <h2>Espaço para histórias de transformação.</h2>
          <p>
            Depoimentos podem ser substituídos por relatos reais, prints autorizados ou cases
            de clientes quando houver aprovação de uso.
          </p>
        </div>
        <div class="testimonial-grid">${M()}</div>
      </div>
    </section>

    <section class="section faq-section" id="faq">
      <div class="container faq-grid">
        <div class="section-heading">
          <span class="eyebrow">Perguntas frequentes</span>
          <h2>Dúvidas comuns antes de começar.</h2>
          <p>
            A primeira conversa serve para entender seu momento e indicar o melhor caminho.
          </p>
        </div>
        <div class="faq-list">${j()}</div>
      </div>
    </section>

    <section class="section contact-section" id="contato">
      <div class="container contact-grid">
        <div>
          <span class="eyebrow">Comece hoje</span>
          <h2>O futuro começa com pequenas escolhas feitas hoje.</h2>
          <p>
            Envie uma mensagem e dê o primeiro passo para organizar sua vida financeira com
            clareza, propósito e acompanhamento profissional.
          </p>
          ${c("Falar com a Gilmara no WhatsApp")}
        </div>
        <form class="lead-form" id="lead-form">
          <label>
            <span>Nome</span>
            <input name="name" autocomplete="name" placeholder="Seu nome" required />
          </label>
          <label>
            <span>Principal objetivo</span>
            <select name="goal" required>
              <option value="">Selecione uma opção</option>
              <option>Organizar gastos</option>
              <option>Sair das dívidas</option>
              <option>Planejar metas</option>
              <option>Aprender a poupar</option>
              <option>Palestra ou workshop</option>
            </select>
          </label>
          <label>
            <span>Mensagem</span>
            <textarea name="message" rows="4" placeholder="Conte brevemente o que você deseja organizar"></textarea>
          </label>
          <button class="button button-primary" type="submit">
            ${i.whatsapp}
            Quero organizar minha vida financeira
          </button>
          <p class="privacy-note">Seus dados serão usados apenas para iniciar a conversa pelo WhatsApp.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <a class="brand footer-brand" href="#inicio" aria-label="${t} - início">
        <img src="/assets/gilmara/gilmara-logo.png" alt="" />
        <span>
          <strong>${t}</strong>
          <small>${p}</small>
        </span>
      </a>
      <p>Mentoria financeira para clareza, organização e prosperidade possível.</p>
      <nav aria-label="Links do rodapé">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </footer>

  <a class="floating-whatsapp" href="${m}" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp">
    ${i.whatsapp}
  </a>
`;const l=document.querySelector("#lead-form");l==null||l.addEventListener("submit",a=>{a.preventDefault();const e=new FormData(l),r=String(e.get("name")??"").trim(),n=String(e.get("goal")??"").trim(),o=String(e.get("message")??"").trim(),s=["Olá, Gilmara. Quero organizar minha vida financeira.",r?`Nome: ${r}`:"",n?`Objetivo: ${n}`:"",o?`Mensagem: ${o}`:""].filter(Boolean).join(`
`);window.open(u(void 0,s),"_blank","noopener,noreferrer")});document.querySelectorAll(".faq-item").forEach(a=>{a.addEventListener("toggle",()=>{a.open&&document.querySelectorAll(".faq-item[open]").forEach(e=>{e!==a&&(e.open=!1)})})});
