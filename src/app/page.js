"use client"

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Truck, Menu, X, Leaf, Apple, Carrot, Store } from 'lucide-react';

const FarmFreshWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    { 
      id: 1, 
      name: 'Fresh Red Apples', 
      price: '₹120/kg', 
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop&auto=format', 
      category: 'Fruits' 
    },
    { 
      id: 2, 
      name: 'Organic Bananas', 
      price: '₹60/dozen', 
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop&auto=format', 
      category: 'Fruits' 
    },
   
    { 
      id: 4, 
      name: 'Green Spinach', 
      price: '₹30/bunch', 
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop&auto=format', 
      category: 'Vegetables' 
    },
    { 
      id: 5, 
      name: 'Fresh Carrots', 
      price: '₹50/kg', 
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop&auto=format', 
      category: 'Vegetables' 
    },
    { 
      id: 6, 
      name: 'Premium Basmati Rice', 
      price: '₹180/kg', 
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&auto=format', 
      category: 'Grocery' 
    },
    { 
      id: 7, 
      name: 'Juicy Oranges', 
      price: '₹100/kg', 
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop&auto=format', 
      category: 'Fruits' 
    },
    { 
      id: 8, 
      name: 'Green Bell Peppers', 
      price: '₹80/kg', 
      image: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=300&h=300&fit=crop&auto=format', 
      category: 'Vegetables' 
    },
    { 
      id: 9, 
      name: 'Fresh Onions', 
      price: '₹35/kg', 
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop&auto=format', 
      category: 'Vegetables' 
    },
    { 
      id: 10, 
      name: 'Green Broccoli', 
      price: '₹90/kg', 
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=300&fit=crop&auto=format', 
      category: 'Vegetables' 
    },
    { 
      id: 11, 
      name: 'Fresh Mangoes', 
      price: '₹150/kg', 
      image: 'https://images.unsplash.com/photo-1605833692813-2e8c89c09696?w=300&h=300&fit=crop&auto=format', 
      category: 'Fruits' 
    },
    { 
      id: 12, 
      name: 'Whole Wheat Flour', 
      price: '₹45/kg', 
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop&auto=format', 
      category: 'Grocery' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
           
              <h1 className="text-2xl font-bold">Farm Fresh</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-green-200 transition-colors">Home</a>
              <a href="#products" className="hover:text-green-200 transition-colors">Products</a>
              <a href="#about" className="hover:text-green-200 transition-colors">About</a>
              <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-700 px-4 py-2 space-y-2">
            <a href="#home" className="block hover:text-green-200">Home</a>
            <a href="#products" className="block hover:text-green-200">Products</a>
            <a href="#about" className="block hover:text-green-200">About</a>
            <a href="#contact" className="block hover:text-green-200">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Fresh Fruits & Vegetables
              <span className="text-green-600"> Delivered Daily</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Premium quality fresh produce and grocery items delivered right to your doorstep in Delhi. 
              Experience the farm-to-table freshness with Farm Fresh!
            </p>
            
            {/* Location Highlight */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center text-green-600 mb-2">
                <MapPin className="h-6 w-6 mr-2" />
                <span className="font-semibold text-lg">Our Location</span>
              </div>
              <p className="text-gray-800 font-medium">Bhajanpura Thana Road</p>
              <p className="text-gray-800 font-medium">Delhi - 110053</p>
              <div className="flex items-center justify-center mt-3 text-green-600">
                <Truck className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">FREE HOME DELIVERY</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                View Products
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Now: +91 9399348867
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Free Home Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery service across Delhi NCR at no extra cost for orders above ₹500.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">100% Fresh Guarantee</h3>
              <p className="text-gray-600">Handpicked fresh produce sourced directly from local farms and delivered the same day.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Store className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Store</h3>
              <p className="text-gray-600">Visit our store at Bhajanpura Thana Road or call for quick delivery to your neighborhood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Fresh Products
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Premium quality fruits, vegetables, and grocery items sourced daily from local farms
          </p>
          
          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-2">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium">All Products</button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border hover:bg-green-50 transition-colors">Fruits</button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border hover:bg-green-50 transition-colors">Vegetables</button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border hover:bg-green-50 transition-colors">Grocery Items</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Fresh Daily</span>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      Call to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see more products or place an order?</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              Call +91 9399348867
            </button>
          </div>
        </div>
      </section>

      {/* Location & Delivery Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Store in Delhi</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-200 mr-3" />
                  <div>
                    <p className="font-semibold">Bhajanpura Thana Road</p>
                    <p>Delhi - 110053</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-200 mr-3" />
                  <span>Open Daily: 7:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-200 mr-3" />
                  <span>+91 9399348867</span>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Farm Fresh</h2>
              <p className="text-gray-600 mb-4">
                Located in the heart of Bhajanpura, Farm Fresh has been serving the Delhi community 
                with premium quality fruits, vegetables, and grocery items for over a decade. We take 
                pride in sourcing the freshest produce directly from local farms.
              </p>
              <p className="text-gray-600 mb-6">
                Our store at Bhajanpura Thana Road is your one-stop destination for all fresh produce needs. 
                We believe in supporting local farmers while providing our customers with the best possible 
                products at competitive prices with convenient home delivery.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-gray-600 text-sm">Years Serving Delhi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600 text-sm">Fresh Guarantee</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Apple className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900">Fresh Fruits</h4>
                <p className="text-gray-600 text-sm mt-2">Daily fresh imports</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Carrot className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900">Farm Vegetables</h4>
                <p className="text-gray-600 text-sm mt-2">Locally sourced</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center col-span-2">
                <Store className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900">Quality Grocery Items</h4>
                <p className="text-gray-600 text-sm mt-2">Premium brands and essentials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Address</h4>
                    <p className="text-gray-700">Bhajanpura Thana Road</p>
                    <p className="text-gray-700">Delhi - 110053</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Number</h4>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm">Call for orders & inquiries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Hours</h4>
                    <p className="text-gray-700">Monday - Sunday</p>
                    <p className="text-gray-700">7:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Home Delivery</h4>
                <p className="text-gray-600 mb-2">
                  We offer free home delivery across Delhi NCR for orders above ₹500.
                </p>
                <p className="text-gray-600">
                  Same-day delivery available for orders placed before 6:00 PM.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  onClick={() => alert('Thank you for your message! We will contact you soon.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-bold">Farm Fresh</h3>
              </div>
              <p className="text-gray-300 mb-2">
                Your trusted partner for fresh fruits, vegetables, and grocery items in Delhi.
              </p>
              <p className="text-gray-300 text-sm">
                📍 Bhajanpura Thana Road, Delhi - 110053
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-green-400">Home</a></li>
                <li><a href="#products" className="hover:text-green-400">Products</a></li>
                <li><a href="#about" className="hover:text-green-400">About</a></li>
                <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Fresh Fruits & Vegetables</li>
                <li>✓ Quality Grocery Items</li>
                <li>✓ Free Home Delivery</li>
                <li>✓ Same Day Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Farm Fresh, Bhajanpura Thana Road, Delhi. All rights reserved.</p>
            <p className="text-sm mt-1">Call +91 9399348867 for fresh produce delivery</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmFreshWebsite;