import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calculator, Check, Clock3, Package, Sparkles, TrendingUp, Utensils, WalletCards } from 'lucide-react';
import './styles.css';

const CHECKOUT_URL = import.meta.env.VITE_CAKTO_CHECKOUT_URL || '#oferta';

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

function App() {
  const goToCheckout = () => {
    if (CHECKOUT_URL.startsWith('http')) window.location.href = CHECKOUT_URL;
    else document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Para quem quer vender brigadeiro gourmet e lucrar de verdade</span>
            <h1>Você pode estar vendendo brigadeiro gourmet e <em>ganhando dinheiro de salgado.</em></h1>
            <p className="hero-text">Saiba exatamente quanto cobrar para transformar cada encomenda em lucro — sem chutar o preço e sem desvalorizar seu trabalho.</p>
            <button className="primary-btn" onClick={goToCheckout}>Quero cobrar o preço certo <span>→</span></button>
            <div className="trust-row"><Check size={17} /> Precificação prática <span>•</span> Feito para iniciantes <span>•</span> 20 receitas bônus</div>
          </div>

          <div className="calculator-card">
            <div className="calc-header"><div><span>PRIMEIRA ENCOMENDA</span><h2>Calculadora de preço</h2></div><Calculator size={26} /></div>
            <div className="order-pill">Encomenda de 100 brigadeiros</div>
            <div className="calc-total"><small>Custo estimado</small><strong>R$ 80,02</strong></div>
            <div className="calc-stats"><div><span>Custo por unidade</span><b>R$ 0,80</b></div><div><span>Preço de referência</span><b>R$ 133,37</b></div></div>
            <div className="calc-note">Ingredientes + embalagem + mão de obra + outros custos entram na conta.</div>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="container narrow center">
          <span className="section-kicker">ANTES DE PRODUZIR</span>
          <h2>O problema não é fazer o brigadeiro.<br /><span>É saber se a encomenda vale a pena.</span></h2>
          <p>Quando você está começando, é fácil esquecer embalagem, seu tempo, gás, energia e outros pequenos custos. Aí você entrega, recebe o pagamento e só depois percebe que trabalhou muito por pouco.</p>
        </div>
        <div className="container cost-grid">
          <div className="cost-card"><WalletCards size={23}/><h3>Ingredientes</h3><p>Chocolate, leite condensado, manteiga, granulado e outros.</p><strong>R$ 28,50</strong></div>
          <div className="cost-card"><Clock3 size={23}/><h3>Mão de obra</h3><p>Seu tempo e dedicação também têm valor.</p><strong>R$ 22,00</strong></div>
          <div className="cost-card"><Package size={23}/><h3>Embalagem</h3><p>Caixinhas, forminhas, etiquetas e proteção.</p><strong>R$ 12,30</strong></div>
          <div className="cost-card"><Sparkles size={23}/><h3>Outros custos</h3><p>Energia, água, gás, utensílios e imprevistos.</p><strong>R$ 8,70</strong></div>
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
