import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/Vx0qNznYK0vCwJx2vv8ok6/sandbox/A82FO13VVMO2GAMWZCev7c-img-1_1770500409000_na1fn_Y29ydGVjZXJ0by1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVngwcU56bllLMHZDd0p4MnZ2OG9rNi9zYW5kYm94L0E4MkZPMTNWVk1PMkdBTVdaQ2V2N2MtaW1nLTFfMTc3MDUwMDQwOTAwMF9uYTFmbl9ZMjl5ZEdWalpYSjBieTFzYjJkdi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Tc-RWt9SKgKaOm2bZCBJu1Evn13b-ZAsRPzO7-vIQDqwaBTqFC75lpynVzhAHjRmBTRkJ20V8iGQbFgnrt3MklGqgeO1JGX460iJaIIebdevOx1rz1WmemcF7RC8gWmZ7GWIdRMTzEW-uI65~zx36SGY~MvX6NCtDQhv0YxsGf4hDCCntieSfhE3CuIixO8yOEmiAjeaGPGTQsGXJcl75Z~uEBNVDztkgTewXkvw2T~gn0HlBu83Cppu5ErLMrGfkrlWQZbm1xMBCzqzxtDs4lLOVurCS0zbnZOhgRcaocc8sq9Nusw5G7sGthYz5mTnzQ74JjksMVipClSxg~VFEA__" 
              alt="CorteCertoApp" 
              className="logo-img"
            />
          </div>
          <nav className="nav">
            <a href="#features">Recursos</a>
            <a href="#pricing">Preços</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              O CorteCerto é a agenda inteligente da sua barbearia.
              <span className="highlight"> Sem complicação mais cortes e menos desencontros!</span>
            </h1>
            <p className="hero-subtitle">
              Sua barbearia organizada, clientes sempre no horário.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Começar Grátis</button>
              <button className="btn btn-secondary">Ver Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/Vx0qNznYK0vCwJx2vv8ok6/sandbox/A82FO13VVMO2GAMWZCev7c-img-1_1770500409000_na1fn_Y29ydGVjZXJ0by1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVngwcU56bllLMHZDd0p4MnZ2OG9rNi9zYW5kYm94L0E4MkZPMTNWVk1PMkdBTVdaQ2V2N2MtaW1nLTFfMTc3MDUwMDQwOTAwMF9uYTFmbl9ZMjl5ZEdWalpYSjBieTFzYjJkdi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Tc-RWt9SKgKaOm2bZCBJu1Evn13b-ZAsRPzO7-vIQDqwaBTqFC75lpynVzhAHjRmBTRkJ20V8iGQbFgnrt3MklGqgeO1JGX460iJaIIebdevOx1rz1WmemcF7RC8gWmZ7GWIdRMTzEW-uI65~zx36SGY~MvX6NCtDQhv0YxsGf4hDCCntieSfhE3CuIixO8yOEmiAjeaGPGTQsGXJcl75Z~uEBNVDztkgTewXkvw2T~gn0HlBu83Cppu5ErLMrGfkrlWQZbm1xMBCzqzxtDs4lLOVurCS0zbnZOhgRcaocc8sq9Nusw5G7sGthYz5mTnzQ74JjksMVipClSxg~VFEA__" 
              alt="CorteCertoApp Hero" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Taglines Section */}
      <section className="taglines">
        <div className="container">
          <div className="tagline-grid">
            <div className="tagline-card">
              <h3>Chega de sistema complicado.</h3>
              <p>Agenda simples, cliente marcado, dia organizado.</p>
            </div>
            <div className="tagline-card">
              <h3>Enquanto outros gerenciam empresas,</h3>
              <p>o Corte Certo organiza sua agenda.</p>
            </div>
            <div className="tagline-card">
              <h3>Menos sistema.</h3>
              <p>Mais cliente sentado na cadeira.</p>
            </div>
            <div className="tagline-card">
              <h3>Agenda simples</h3>
              <p>para barbearias reais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Por que escolher o Corte Certo?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>App para Clientes</h3>
              <p>Seus clientes marcam horários direto pelo app, sem ligações.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Agenda Inteligente</h3>
              <p>Visualize toda a semana em um só lugar. Simples e prático.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Lembretes Automáticos</h3>
              <p>Clientes recebem lembretes e reduzem faltas em até 60%.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Gestão de Serviços</h3>
              <p>Controle preços, duração e disponibilidade de cada serviço.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Relatórios Simples</h3>
              <p>Veja quanto você faturou, quantos clientes vieram, tudo claro.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Seguro e Confiável</h3>
              <p>Seus dados estão seguros. Acesse de qualquer lugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Preços Simples e Justos</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Mais Popular</div>
              <h3>Plano Mensal</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">29,90</span>
                <span className="period">/mês</span>
              </div>
              <p className="price-description">Após o primeiro mês</p>
              <ul className="features-list">
                <li>✓ Agenda ilimitada</li>
                <li>✓ App para clientes</li>
                <li>✓ Lembretes automáticos</li>
                <li>✓ Relatórios básicos</li>
                <li>✓ Suporte por email</li>
              </ul>
              <button className="btn btn-primary">Começar Agora</button>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge featured-badge">Melhor Oferta</div>
              <h3>Primeiro Mês</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">9,90</span>
                <span className="period">/mês</span>
              </div>
              <p className="price-description">Depois R$ 29,90/mês</p>
              <ul className="features-list">
                <li>✓ Tudo do plano mensal</li>
                <li>✓ Desconto especial</li>
                <li>✓ Sem compromisso</li>
                <li>✓ Cancele quando quiser</li>
                <li>✓ Suporte prioritário</li>
              </ul>
              <button className="btn btn-primary-featured">Começar Agora</button>
            </div>
            <div className="pricing-card">
              <div className="pricing-badge">Teste Grátis</div>
              <h3>7 Dias Grátis</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">0</span>
                <span className="period">/7 dias</span>
              </div>
              <p className="price-description">Depois R$ 29,90/mês</p>
              <ul className="features-list">
                <li>✓ Acesso completo</li>
                <li>✓ Sem cartão de crédito</li>
                <li>✓ Teste tudo</li>
                <li>✓ Cancele a qualquer hora</li>
                <li>✓ Suporte por email</li>
              </ul>
              <button className="btn btn-secondary">Começar Teste</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Pronto para organizar sua barbearia?</h2>
          <p>Comece grátis hoje. Sem cartão de crédito necessário.</p>
          <form onSubmit={handleSubmit} className="email-form">
            <input 
              type="email" 
              placeholder="Seu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Começar Agora</button>
          </form>
          {submitted && <p className="success-message">✓ Verifique seu email!</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>CorteCertoApp</h4>
              <p>A agenda que a barbearia realmente precisa.</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><a href="#features">Recursos</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CorteCertoApp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
