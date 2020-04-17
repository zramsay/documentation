(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{242:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("p",[e._v("This page lists words, expressions, or concepts used by the Agoric technology stack.")]),e._v(" "),a("h2",{attrs:{id:"allegedname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allegedname"}},[e._v("#")]),e._v(" AllegedName")]),e._v(" "),a("p",[e._v("Human-readable name of a kind of rights. The alleged name should\nnot be trusted as an accurate depiction, since it is provided by\nthe maker of the mint and could be deceptive, but is useful for debugging and double-checking.")]),e._v(" "),a("p",[e._v("The AllegedName must be a string.")]),e._v(" "),a("h2",{attrs:{id:"amountmath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amountmath"}},[e._v("#")]),e._v(" AmountMath")]),e._v(" "),a("p",[e._v("AmountMath executes the logic of how amounts are changed when digital assets are merged, separated, or otherwise manipulated. For example, a deposit of 2 bucks into a purse that already has 3 bucks gives a new balance of 5 bucks. An empty purse has 0 bucks. AmountMath relies heavily on polymorphic MathHelpers, which manipulate the unbranded portion.")]),e._v(" "),a("h2",{attrs:{id:"amounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amounts"}},[e._v("#")]),e._v(" Amounts")]),e._v(" "),a("p",[e._v("Amounts are the canonical description of tradable goods. They are manipulated\nby issuers and mints, and represent the goods and currency carried by purses and\npayments. They can be used to represent things like currency, stock, and the\nabstract right to participate in a particular exchange.")]),e._v(" "),a("p",[e._v("An amount is composed of a "),a("code",[e._v("Brand")]),e._v(" with an "),a("code",[e._v("Extent")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"assetholder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assetholder"}},[e._v("#")]),e._v(" AssetHolder")]),e._v(" "),a("p",[e._v("Purses and Payments are AssetHolders.")]),e._v(" "),a("h2",{attrs:{id:"brand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brand"}},[e._v("#")]),e._v(" Brand")]),e._v(" "),a("p",[e._v("Identifies the kind of issuer.")]),e._v(" "),a("h2",{attrs:{id:"ertp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ertp"}},[e._v("#")]),e._v(" ERTP")]),e._v(" "),a("p",[e._v("Electronic Rights Transfer Protocol - Agoric's fungible and\nnonfungible token standard that uses object capabilities to enforce\naccess control. Instead of having to prove ownership of a\ncorresponding private key, in the world of object capabilities, if\nyour program has a reference to an object, it can call methods on that\nobject. If it doesn't have a reference, it can't. For more on object\ncapabilities, see "),a("a",{attrs:{href:"http://habitatchronicles.com/2017/05/what-are-capabilities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chip Morningstar's\npost"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"extent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extent"}},[e._v("#")]),e._v(" Extent")]),e._v(" "),a("p",[e._v("Extents describe the extent of something that can be owned or shared: How much, how many, or description of unique asset. (Pixel(3,2), $3 or ‘Right to occupy on Tuesdays’). Fungible extents are normally represented by natural numbers. Other extents may be represented as strings naming a particular right, or an arbitrary object that sensibly represents the rights at issue.")]),e._v(" "),a("p",[e._v("Extent must be Comparable.")]),e._v(" "),a("h2",{attrs:{id:"handle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handle"}},[e._v("#")]),e._v(" Handle")]),e._v(" "),a("p",[e._v("A handle is a unique identifier implemented as a JavaScript object. Only its identity is meaningful, so handles do not have properties. Unlike number or string identifiers, handles are unforgeable. This means the only way to know a handle identity is being given an object reference, and no identity can be guessed and no fake identity will succeed.")]),e._v(" "),a("p",[e._v("For example, Zoe often uses "),a("code",[e._v("offerHandle")]),e._v(" to refer to offers. Zoe contracts can use an offer's "),a("code",[e._v("offerHandle")]),e._v(" as the key for requesting the current allocation of an offer or reallocating the offer's assets.")]),e._v(" "),a("h2",{attrs:{id:"issuer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuer"}},[e._v("#")]),e._v(" Issuer")]),e._v(" "),a("p",[e._v("Can create empty purses and payments, but cannot mint new amounts. Issuers can also transform payments (splitting, combining, burning, and claiming payments exclusively). You should get an issuer from a trusted source and then rely on it to determine if an untrusted payment is valid. Issuers are linked to a single mint and vice versa, so each issuer only works with one type of thing, such as only working with quatloos or only working with moola.")]),e._v(" "),a("h2",{attrs:{id:"mathhelpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mathhelpers"}},[e._v("#")]),e._v(" MathHelpers")]),e._v(" "),a("p",[e._v("Arithmetic on extents. MathHelpers are used by AmountMath to do their extent arithmetic, and then brand the result, making a new amount.")]),e._v(" "),a("h2",{attrs:{id:"mint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[e._v("#")]),e._v(" Mint")]),e._v(" "),a("p",[e._v("The admin facet of the issuer, and the only object with the authority\nto mint new digital assets.")]),e._v(" "),a("h2",{attrs:{id:"purse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purse"}},[e._v("#")]),e._v(" Purse")]),e._v(" "),a("p",[e._v("An "),a("a",{attrs:{href:"#assetholder"}},[e._v("AssetHolder")]),e._v(". Purses hold amounts of certain rights issued by Mints, specifically amounts that are "),a("em",[e._v("stationary")]),e._v(". Purses can transfer part of the balance they hold in a payment, which has a narrower interface.")]),e._v(" "),a("p",[e._v("See more: "),a("router-link",{attrs:{to:"/ertp/api/purse.html"}},[e._v("Purse API")])],1),e._v(" "),a("h2",{attrs:{id:"payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment"}},[e._v("#")]),e._v(" Payment")]),e._v(" "),a("p",[e._v("An "),a("a",{attrs:{href:"#assetholder"}},[e._v("AssetHolder")]),e._v(". Payments hold amounts of certain rights issued by Mints, specifically amounts that are in "),a("em",[e._v("transit")]),e._v(". Amounts from payments can be deposited in purses, but otherwise, the entire amount is available when the payment is transferred. Payments can be converted to Purses.")]),e._v(" "),a("p",[e._v("See more: "),a("router-link",{attrs:{to:"/ertp/api/payment.html"}},[e._v("Payment API")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);