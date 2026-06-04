'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ShoppingBag, X, Check, ArrowRight, FileText, Download } from 'lucide-react'
import { getProducts, recordPurchase, Product } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(getProducts().filter(p => p.type === 'playbook'))
    recordEvent('pageview', { section: 'products' })
  }, [])

  const addToCart = (product: Product) => {
    if (cart.find((p) => p.slug === product.slug)) {
      setIsCartOpen(true)
      return
    }
    const newCart = [...cart, product]
    setCart(newCart)
    setIsCartOpen(true)
    recordEvent('click', { action: 'add_to_cart', product: product.title })
  }

  const removeFromCart = (slug: string) => {
    setCart(cart.filter((p) => p.slug !== slug))
  }

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    cart.forEach((product) => {
      recordPurchase(email, product.slug)
      recordEvent('purchase', { product: product.title, price: product.price })
    })

    setPurchasedProducts([...cart])
    setCart([])
    setCheckoutStep('success')
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Header Section */}
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  Digital Products & Playbooks
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-forest leading-[0.98] tracking-[-0.02em] font-normal">
                Frameworks that compile. <br />
                <em className="italic font-light text-sienna">Built for builders.</em>
              </h1>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-3.5 bg-forest hover:bg-sienna text-cream flex items-center gap-2 transition-colors duration-500 rounded-sm self-start md:self-auto"
            >
              <ShoppingBag size={18} />
              <span className="text-xs uppercase tracking-wider font-semibold">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-sienna text-cream font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-cream animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            {products.map((product) => (
              <div
                key={product.slug}
                className="bg-sand-soft border border-rule/30 p-8 sm:p-10 flex flex-col justify-between rounded-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs uppercase tracking-[0.16em] text-sienna font-semibold bg-cream px-3 py-1 border border-rule/20">
                      PDF Field Guide
                    </span>
                    <span className="font-serif text-3xl text-forest font-semibold">${product.price}</span>
                  </div>
                  <h2 className="font-serif text-3xl text-forest mb-4 leading-tight group-hover:text-sienna transition-colors duration-300">
                    {product.title}
                  </h2>
                  <p className="text-sm text-slate-ink leading-relaxed mb-8">
                    {product.desc}
                  </p>
                  <div className="border-t border-rule/30 pt-6 mb-8">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-soft font-bold mb-3">
                      What you receive
                    </div>
                    <ul className="space-y-2.5">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-xs text-forest flex items-start gap-2.5">
                          <span className="text-sienna mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-4 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-500 rounded-sm flex items-center justify-center gap-2"
                >
                  Purchase Field Guide <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart and Mock Checkout Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-forest-deep z-50 pointer-events-auto"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream border-l border-rule z-50 shadow-2xl flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-rule">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-sienna" size={20} />
                  <span className="font-serif text-2xl text-forest">Your Cart</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false)
                    setCheckoutStep('cart')
                  }}
                  className="p-1.5 hover:bg-sand-soft rounded-full text-slate-ink hover:text-forest transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Content Area */}
              <div className="flex-grow overflow-y-auto p-6 sm:p-8">
                {checkoutStep === 'cart' && (
                  <div className="space-y-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-20">
                        <ShoppingBag size={48} className="mx-auto text-rule mb-4 opacity-50" />
                        <p className="font-serif text-lg text-slate-ink">Your cart is empty</p>
                        <p className="text-xs text-slate-soft mt-1">Add a digital playbook to get started</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <div
                              key={item.slug}
                              className="bg-sand-soft p-4 flex justify-between items-start border border-rule/30 relative"
                            >
                              <div>
                                <h4 className="font-serif text-lg text-forest leading-snug">{item.title}</h4>
                                <span className="text-[10px] uppercase text-sienna tracking-wider font-semibold">
                                  ${item.price} · Instant Access
                                </span>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.slug)}
                                className="text-slate-soft hover:text-destructive transition-colors p-1"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="pt-6 border-t border-rule flex justify-between items-baseline">
                          <span className="text-xs uppercase tracking-wider text-slate-soft">Subtotal</span>
                          <span className="font-serif text-2xl text-forest font-semibold">${totalPrice}</span>
                        </div>
                        <button
                          onClick={() => setCheckoutStep('details')}
                          className="w-full py-4 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-500 rounded-sm flex items-center justify-center gap-2 mt-8"
                        >
                          Checkout Securely <ArrowRight size={14} />
                        </button>
                      </>
                    )}
                  </div>
                )}

                {checkoutStep === 'details' && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                    <div className="text-xs uppercase tracking-wider text-slate-soft mb-2">
                      Secure Checkout Simulator
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-ink uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="founder@yourstartup.com"
                        className="w-full px-4 py-3 bg-sand-soft border border-rule focus:outline-none focus:border-sienna rounded-sm text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-ink uppercase tracking-wider mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-4 py-3 bg-sand-soft border border-rule focus:outline-none focus:border-sienna rounded-sm text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-ink uppercase tracking-wider mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 bg-sand-soft border border-rule focus:outline-none focus:border-sienna rounded-sm text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-ink uppercase tracking-wider mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          required
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          placeholder="123"
                          className="w-full px-4 py-3 bg-sand-soft border border-rule focus:outline-none focus:border-sienna rounded-sm text-sm"
                        />
                      </div>
                    </div>
                    <div className="pt-6 border-t border-rule flex justify-between items-baseline">
                      <span className="text-xs uppercase tracking-wider text-slate-soft">Amount Due</span>
                      <span className="font-serif text-2xl text-forest font-semibold">${totalPrice}</span>
                    </div>
                    <div className="flex gap-3 mt-8">
                      <button
                        type="button"
                        onClick={() => setCheckoutStep('cart')}
                        className="w-1/3 py-4 border border-rule text-slate-ink text-xs uppercase tracking-[0.18em] font-semibold hover:bg-sand-soft transition-colors text-center"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-4 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-500 flex items-center justify-center gap-2"
                      >
                        Pay & Download <Check size={14} />
                      </button>
                    </div>
                  </form>
                )}

                {checkoutStep === 'success' && (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-sienna text-cream rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} />
                    </div>
                    <h3 className="font-serif text-3xl text-forest mb-3">Order Confirmed</h3>
                    <p className="text-sm text-slate-ink leading-relaxed mb-8">
                      Thank you for your purchase. We have logged your transaction for email <strong>{email}</strong>. 
                      Your playbooks are now available for instant download below.
                    </p>

                    <div className="space-y-3">
                      {purchasedProducts.map((p) => (
                        <div key={p.slug} className="bg-sand-soft p-4 border border-rule/30 flex justify-between items-center text-left">
                          <div>
                            <span className="block font-serif text-sm font-semibold text-forest leading-snug">{p.title}</span>
                            <span className="text-[10px] text-slate-soft uppercase tracking-wider font-medium">PDF Field Guide · Instant</span>
                          </div>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              alert(`Simulating file download: ${p.slug}.pdf`)
                            }}
                            className="p-2.5 bg-forest hover:bg-sienna text-cream transition-colors duration-300 rounded-sm"
                          >
                            <Download size={16} />
                          </a>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setIsCartOpen(false)
                        setCheckoutStep('cart')
                      }}
                      className="w-full py-4 mt-8 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-500 rounded-sm"
                    >
                      Continue Shopping
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
