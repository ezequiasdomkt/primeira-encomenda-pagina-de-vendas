import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator, Check, Clock3, Package, Sparkles, TrendingUp, Utensils, WalletCards, BadgePercent, MousePointer2 } from 'lucide-react';
import './styles.css';

const CHECKOUT_URL = import.meta.env.VITE_CAKTO_CHECKOUT_URL || '#oferta';

const calculatorSlides = [
  { title: 'Ingredientes', text: 'Chocolate, leite condensado, manteiga, granulado e outros.', value: 'R$ 28,50', icon: WalletCards },
  { title: 'Mão de obra', text: 'Seu tempo e dedicação também têm valor.', value: 'R$ 22,00', icon: Clock3 },
  { title: 'Embalagem', text: 'Caixinhas, forminhas, etiquetas e proteção.', value: 'R$ 12,30', icon: Package },
  { title: 'Outros custos', text: 'Energia, água, gás, utensílios e imprevistos.', value: 'R$ 8,70', icon: Sparkles },
  { title: 'Margem de lucro', text: 'Escolha uma margem para saber quanto cobrar com segurança.', value: '40%', icon: BadgePercent },
];

function BookMockup() {
  return (
    <div className="book-wrap" aria-label="Livro digital com 20 receitas bônus">
      <div className="book">
        <div className="book-top">BÔNUS ESPECIAL</div>
        <div className="book-title">20 RECEITAS<br />BÔNUS</div>
        <div className="book-subtitle">Sabores para começar a vender</div>
        <div className="book-icon">🍫</div>
      </div>
      <div className="book-shadow" />
    </div>
  );
}

function AnimatedCalculator() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase((current) => (current + 1) % 15);
    }, 850);
    return () => window.clearInterval(timer);
  }, []);

  const showName = phase >= 1;
  const showQuantity = phase >= 2;
  const showIngredients = phase >= 3;
  const showPackaging = phase >= 4;
  const showHours = phase >= 5;
  const showHourValue = phase >= 6;
  const showMargin = phase >= 7;
  const showResult = phase >= 9;
  const clicked = phase === 8 || phase >= 9;

  return (
    <div className="calculator-card calculator-preview animated-calculator" aria-label="Demonstração animada da calculadora">
      <div className="calc-header">
        <div><span>PRIMEIRA ENCOMENDA</span><h2>Calcule o preço certo do seu doce</h2></div>
        <Calculator size={26} />
      </div>
      <p className="animated-subtitle">Preencha os dados abaixo e descubra quanto cobrar pela sua encomenda.</p>

      <div className="animated-step active-step">
        <div className="animated-step-number">1</div>
        <div className="animated-step-body">
          <h3>O que você vai vender?</h3>
          <p>Digite o nome do doce e quantas unidades você vai produzir.</p>
          <div className="animated-fields two-columns">
            <div className={`animated-field ${showName ? 'filled' : ''}`}><label>Nome do doce</label><div className="field-value">{showName ? 'Brigadeiro Gourmet' : <span className="field-placeholder">Digite o nome...</span>}</div></div>
            <div className={`animated-field ${showQuantity ? 'filled' : ''}`}><label>Quantidade de unidades</label><div className="field-value">{showQuantity ? '20' : <span className="field-placeholder">0</span>}<span>un.</span></div></div>
          </div>
        </div>
      </div>

      <div className="animated-step">
        <div className="animated-step-number">2</div>
        <div className="animated-step-body">
          <h3>Quanto você vai gastar?</h3>
          <p>Informe os valores que você vai gastar para fazer a encomenda.</p>
          <div className="animated-fields two-columns">
            <div className={`animated-field ${showIngredients ? 'filled' : ''}`}><label>Ingredientes</label><div className="field-value">{showIngredients ? 'R$ 15' : 'R$ 0'}</div></div>
            <div className={`animated-field ${showPackaging ? 'filled' : ''}`}><label>Embalagem</label><div className="field-value">{showPackaging ? 'R$ 5' : 'R$ 0'}</div></div>
            <div className={`animated-field ${showHours ? 'filled' : ''}`}><label>Mão de obra (horas)</label><div className="field-value">{showHours ? '3' : '0'}<span>h</span></div></div>
            <div className={`animated-field ${showHourValue ? 'filled' : ''}`}><label>Valor da hora</label><div className="field-value">{showHourValue ? 'R$ 5' : 'R$ 0'}</div></div>
          </div>
        </div>
      </div>

      <div className="animated-step compact-step">
        <div className="animated-step-number">3</div>
        <div className="animated-step-body">
          <h3>Quanto você quer lucrar?</h3>
          <p>Escolha uma porcentagem de lucro para sua encomenda.</p>
          <div className="margin-options"><span>30%</span><span className={showMargin ? 'selected' : ''}>40%</span><span>50%</span></div>
        </div>
      </div>

      <div className={`animated-calculate ${clicked ? 'clicked' : ''}`}>
        <span>Calcular quanto cobrar</span>
        {clicked && <MousePointer2 className="fake-cursor" size={21} />}
      </div>

      <div className={`animated-result ${showResult ? 'visible' : ''}`}>
        <small>Preço de referência</small>
        <strong>R$ 48,00</strong>
        <span>Valor sugerido para a encomenda</span>
      </div>
    </div>
  );
}

function CalculatorCarousel() {
  const [active, setActive] = useState(0);
  const stageRef = React.useRef(null);

  const scrollToSlide = (index) => {
    const stage = stageRef.current;
    if (!stage) return;
    const target = stage.children[index];
    target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActive(index);
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onScroll = () => {
      const index = Math.round(stage.scrollLeft / stage.clientWidth);
      setActive(Math.max(0, Math.min(index, calculatorSlides.length - 1)));
    };
    stage.addEventListener('scroll', onScroll, { passive: true });
    return () => stage.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="calc-carousel" aria-label="Itens considerados pela calculadora">
      <div className="carousel-label">O QUE ENTRA NA CONTA?</div>
      <div className="carousel-stage" ref={stageRef}>
        {calculatorSlides.map((slide) => {
          const Icon = slide.icon;
          return (
            <article key={slide.title} className="carousel-slide">
              <div className="carousel-icon"><Icon size={25} /></div>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <strong>{slide.value}</strong>
              </div>
            </article>
          );
        })}
      </div>
      <div className="carousel-dots">
        {calculatorSlides.map((slide, index) => <button key={slide.title} className={index === active ? 'active' : ''} aria-label={`Mostrar ${slide.title}`} onClick={() => scrollToSlide(index)} />)}
      </div>
      <div className="swipe-hint">Deslize para o lado <span>→</span></div>
    </div>
  );
}

function App() {
  const goToCheckout = () => {
    if (CHECKOUT_URL.startsWith('http')) window.location.href = CHECKOUT_URL;
    else document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="hero">
        <div className="container hero-copy hero-centered">
          <span className="eyebrow">PRIMEIRA ENCOMENDA</span>
          <h1>Você pode estar vendendo brigadeiro gourmet e <em>ganhando dinheiro de salgado.</em></h1>
          <p className="hero-text">Saiba exatamente quanto cobrar para transformar cada encomenda em lucro — sem chutar o preço e sem desvalorizar seu trabalho.</p>
          <button className="primary-btn" onClick={goToCheckout}>Quero cobrar o preço certo <span>→</span></button>
          <div className="trust-row"><span><Check size={17} /> Precificação prática</span><span>•</span><span>Feito para iniciantes</span><span>•</span><span>20 receitas bônus</span></div>
        </div>
      </section>

      <section className="problem section">
        <div className="container narrow center">
          <span className="section-kicker">ANTES DE PRODUZIR</span>
          <h2>Entenda tudo que entra no custo<br /><span>da sua encomenda.</span></h2>
        </div>
        <div className="container cost-grid">
          <div className="cost-card"><WalletCards size={23}/><h3>Ingredientes</h3><p>Chocolate, leite condensado, manteiga, granulado e outros.</p><strong>R$ 28,50</strong></div>
          <div className="cost-card"><Clock3 size={23}/><h3>Mão de obra</h3><p>Seu tempo e dedicação também têm valor.</p><strong>R$ 22,00</strong></div>
          <div className="cost-card"><Package size={23}/><h3>Embalagem</h3><p>Caixinhas, forminhas, etiquetas e proteção.</p><strong>R$ 12,30</strong></div>
          <div className="cost-card"><Sparkles size={23}/><h3>Outros custos</h3><p>Energia, água, gás, utensílios e imprevistos.</p><strong>R$ 8,70</strong></div>
        </div>

        <div className="container calculator-showcase">
          <div className="calculator-visual-column">
            <AnimatedCalculator />
          </div>
          <CalculatorCarousel />
        </div>

        <div className="container calculator-subcopy center">
          <h2>O problema não é fazer o brigadeiro,<br /><span>é saber se a encomenda vale a pena.</span></h2>
          <p>Quando você está começando, é fácil esquecer embalagem, seu tempo, gás, energia e outros pequenos custos. Aí você entrega, recebe o pagamento e só depois percebe que trabalhou muito por pouco.</p>
        </div>
      </section>

      <section className="steps section">
        <div className="container">
          <div className="center"><span className="section-kicker">COMO FUNCIONA</span><h2>Você organiza. A calculadora faz as contas.</h2></div>
          <div className="step-grid">
            <div className="step"><span>01</span><h3>Informe seus custos</h3><p>Coloque ingredientes, embalagem, mão de obra e quantidade.</p></div>
            <div className="step"><span>02</span><h3>Escolha sua margem</h3><p>Use uma margem de lucro que faça sentido para sua encomenda.</p></div>
            <div className="step"><span>03</span><h3>Veja quanto cobrar</h3><p>Tenha o valor total, o preço por unidade e seu lucro estimado.</p></div>
          </div>
        </div>
      </section>

      <section className="benefits section">
        <div className="container benefit-grid">
          <div><span className="section-kicker">MAIS SEGURANÇA PARA VENDER</span><h2>Pare de chutar o preço da sua encomenda.</h2><p>O Primeira Encomenda foi pensado para deixar a precificação mais clara para quem ainda está começando.</p></div>
          <div className="benefit-list">
            <div><Check/><div><b>Saiba seu custo antes de produzir</b><p>Tenha uma visão mais clara do que realmente entra na encomenda.</p></div></div>
            <div><TrendingUp/><div><b>Proteja sua margem de lucro</b><p>Evite cobrar tão pouco que seu trabalho deixe de compensar.</p></div></div>
            <div><Utensils/><div><b>Comece com um cardápio de sabores</b><p>Use as 20 receitas bônus para ter ideias para suas primeiras vendas.</p></div></div>
          </div>
        </div>
      </section>

      <section className="bonus section">
        <div className="container bonus-box">
          <div className="bonus-copy"><span className="bonus-label">BÔNUS ESPECIAL</span><h2>E você ainda recebe <em>20 receitas de brigadeiros</em> para começar a vender.</h2><p>Um material extra para você ter opções de sabores e começar a montar seu primeiro cardápio junto com a organização da encomenda.</p><ul><li>20 ideias de brigadeiros para começar</li><li>Opções para montar um cardápio inicial</li><li>Material digital para consultar quando precisar</li></ul></div>
          <BookMockup />
        </div>
      </section>

      <section className="offer section" id="oferta">
        <div className="container offer-box center">
          <span className="section-kicker">COMECE AGORA</span>
          <h2>Sua primeira encomenda pode começar com mais clareza.</h2>
          <p>Tenha a calculadora e o bônus de 20 receitas em um só lugar.</p>
          <div className="price"><small>por apenas</small><strong>R$ 9,90</strong></div>
          <button className="primary-btn" onClick={goToCheckout}>Quero acessar o Primeira Encomenda <span>→</span></button>
          <div className="secure"><Check size={16}/> Compra segura • Acesso digital</div>
        </div>
      </section>

      <section className="faq section">
        <div className="container narrow"><div className="center"><span className="section-kicker">DÚVIDAS</span><h2>Perguntas frequentes</h2></div>
          <details><summary>Para quem é o Primeira Encomenda?</summary><p>Para quem está começando a vender doces e quer organizar os custos e o preço de suas primeiras encomendas.</p></details>
          <details><summary>Preciso saber fazer contas?</summary><p>Não. Você informa os valores e a calculadora organiza os resultados para você.</p></details>
          <details><summary>As 20 receitas estão incluídas?</summary><p>Sim. Elas fazem parte do bônus digital apresentado nesta página.</p></details>
          <details><summary>O preço de R$ 9,90 é uma assinatura?</summary><p>Não. A proposta desta oferta é um acesso digital ao produto.</p></details>
        </div>
      </section>

      <footer><div className="container footer-inner"><b>Primeira Encomenda</b><span>Feito para ajudar você a começar a vender com mais clareza.</span></div></footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
