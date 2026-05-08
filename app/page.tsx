export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For SaaS founders &amp; e-commerce owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-retry failed Stripe payments{' '}
          <span className="text-[#58a6ff]">with smart timing</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Detect failed payments via webhooks, retry at ML-optimized moments, and send personalized recovery emails — all on autopilot. Stop losing revenue to preventable churn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start recovering revenue — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '94%', label: 'Average recovery rate on retried payments' },
            { stat: '3x', label: 'More revenue recovered vs manual retries' },
            { stat: '<2 min', label: 'Setup time with your Stripe account' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['Webhook detection', 'Instantly catches every failed payment event from Stripe.'],
            ['ML retry timing', 'Picks the statistically best moment to retry each card.'],
            ['Recovery emails', 'Sends branded, personalized emails with one-click payment update links.'],
            ['Live dashboard', 'Track retry success rates and recovered MRR in real time.'],
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, no tiers</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited Stripe webhook events',
              'ML-optimized retry scheduling',
              'Personalized recovery emails',
              'Payment method update links',
              'Real-time recovery dashboard',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'How does it connect to Stripe?',
              'You register a webhook endpoint in your Stripe dashboard pointing to our service. We handle the rest — no code changes needed.',
            ],
            [
              'What does ML-optimized timing mean?',
              'Our model analyzes historical retry success patterns by card type, failure reason, and time of day to pick the highest-probability retry window for each customer.',
            ],
            [
              'Is my Stripe data safe?',
              'We only receive webhook event payloads — we never store raw card data. All communication uses HTTPS and signed Stripe webhook secrets.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Failed Payment Autopilot. All rights reserved.
      </footer>
    </main>
  )
}
