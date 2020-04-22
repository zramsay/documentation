(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{253:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"zoe-offer-safety-enforcement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe-offer-safety-enforcement"}},[t._v("#")]),t._v(" Zoe: Offer-Safety Enforcement")]),t._v(" "),s("Zoe-Version"),t._v(" "),s("p",[t._v("Note: Zoe is currently at the pre-alpha stage. It has not yet been\nformally tested or hardened.")]),t._v(" "),s("p",[t._v("This guide assumes some knowledge of the "),s("router-link",{attrs:{to:"/ertp/guide/"}},[t._v("ERTP\nfundamentals")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"what-is-zoe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-zoe"}},[t._v("#")]),t._v(" What is Zoe?")]),t._v(" "),s("p",[s("strong",[t._v("For users")]),t._v(": Zoe guarantees that as a user of a smart contract, you\nwill either get what you wanted or get a full refund, even if the\nsmart contract is buggy or malicious. (In fact, the smart contract\nnever has access to your digital assets.)")]),t._v(" "),s("p",[s("strong",[t._v("For developers")]),t._v(": Zoe provides a safety net so you can focus on what\nyour smart contract does best, without worrying about your users\nlosing their assets due to a bug in the code that you wrote. Writing a\nsmart contract on Zoe is easy: all of the Zoe smart contracts are\nwritten in the familiar language of JavaScript.")]),t._v(" "),s("h2",{attrs:{id:"sounds-like-magic-how-does-it-actually-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sounds-like-magic-how-does-it-actually-work"}},[t._v("#")]),t._v(" Sounds like magic. How does it actually work?")]),t._v(" "),s("p",[t._v('To use Zoe, we put things in terms of "offers". An offer proposal is a\nstatement about what you want and what you\'re willing to offer. It\nturns out, many smart contracts (apart from gifts and one-way\npayments) involve an exchange of digital assets that can be put in\nterms of offer proposals.')]),t._v(" "),s("p",[t._v("In this version of Zoe, our offer proposals are simple (see "),s("router-link",{attrs:{to:"/zoe/roadmap/"}},[t._v("our\nroadmap")]),t._v(" for more complex proposal types). We\ncan say things like, \"I'll give you "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Catan",target:"_blank",rel:"noopener noreferrer"}},[t._v("three wood for two\nbricks"),s("OutboundLink")],1),t._v('." '),s("router-link",{attrs:{to:"/zoe/guide/proposal.html"}},[t._v("Learn more about the\nparticulars of structuring an offer proposal here")]),t._v(".")],1),t._v(" "),s("p",[t._v("Offers are a structured way of describing user intent. To a certain\nextent, an offer's rules (called a "),s("em",[t._v("proposal")]),t._v(") are the user's\n"),s("em",[t._v("contractual understanding")]),t._v(" of the agreement they are entering into.\nYou might have noticed that the offer doesn't specify the mechanism by\nwhich the exchange happens. The offer doesn't say whether the item you\nwant is up for auction, in an exchange, or part of a private trade.\nThe offer doesn't mention the particular mechanism because an\nimportant part of the design of Zoe is a "),s("strong",[t._v("separation of concerns")]),t._v('.\nZoe is responsible for enforcing what we call "offer safety", and the\nsmart contract that runs on top of Zoe is responsible for figuring out\na proposed reallocation of resources. To use an auction as an example,\nthe smart contract is responsible for figuring out who wins the\nauction and how much they pay, but Zoe handles the escrowing of the\nbids and the payments. You can think of this as similar to e-commerce\nwebsites using a separate payment-processor so that they don\'t have to\nhandle the credit cards themselves.')]),t._v(" "),s("h3",{attrs:{id:"what-is-offer-safety"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-offer-safety"}},[t._v("#")]),t._v(' What is "offer safety"?')]),t._v(" "),s("p",[t._v("Zoe guarantees offer safety, meaning that when a user makes an offer\nthat is escrowed with Zoe, Zoe guarantees that the user will either\nget back why they said they wanted, or the user will get back what they\noriginally offered.")]),t._v(" "),s("p",[t._v("When a user escrows with Zoe, they get two things back immediately: a\n"),s("code",[t._v("seat")]),t._v(", and a JavaScript promise for a future payout. This "),s("code",[t._v("seat")]),t._v(" has\nmethods that the user can call to take action in the smart contract on\nZoe, without the smart contract ever having access to the underlying\ndigital assets. Let's look a particular example to see how this works.")]),t._v(" "),s("h2",{attrs:{id:"an-example-a-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-example-a-swap"}},[t._v("#")]),t._v(" An example: A swap")]),t._v(" "),s("p",[t._v("I want to trade my three bricks for five wool. You realize you have\nfive wool and agree to the deal. Without Zoe, though, you might send\nme the five wool, and I might disappear without ever giving you the\nthree bricks in return. With Zoe, we can safely trade with each other,\neven if we don't trust one another. We are assured that at worst, if\nthe swap contract behaves badly, we will both get a refund, and at\nbest, we'll get what we each wanted.")]),t._v(" "),s("p",[t._v("Let's look at the basic "),s("code",[t._v("atomicSwap")]),t._v(" contract ("),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/atomicSwap.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("full text of\nthe real contract"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("Here's a high-level overview of what would happen:")]),t._v(" "),s("ol",[s("li",[t._v("I make an instance of the swap contract.")]),t._v(" "),s("li",[t._v("I escrow my three bricks with Zoe. In return, I get a seat at the contract and a promise for a payout.")]),t._v(" "),s("li",[t._v("I use my seat to make the first offer in the swap, and I get back\nan invite to send to you to be the counter-party.")]),t._v(" "),s("li",[t._v("You inspect the invite and verify that it was created using the\n"),s("code",[t._v("atomicSwap")]),t._v(" contract code.")]),t._v(" "),s("li",[t._v("You use your invite to escrow your offer (offering five wool for\nthree bricks) with Zoe, getting a seat and a promise for a payout\nin return.")]),t._v(" "),s("li",[t._v("You use your seat to make a matching offer.")]),t._v(" "),s("li",[t._v("The offer matches and both of our payout promises resolve, mine to\nthe five wool that I wanted, and yours to the three bricks that you\nwanted. Success!")])]),t._v(" "),s("h2",{attrs:{id:"how-to-write-smart-contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-smart-contracts"}},[t._v("#")]),t._v(" How to write smart contracts")]),t._v(" "),s("p",[t._v("Writing smart contracts that run on Zoe is easy, but let's look\nat a simple contract. This contract only does one thing, and\nit's pretty useless - it gives you back what you put in. Let's call it\n"),s("code",[t._v("automaticRefund")]),t._v(". Let's say the code of "),s("code",[t._v("automaticRefund")]),t._v(" looks like\nthis (see the "),s("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/automaticRefund.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("real contract code\nhere"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeContract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("zoe")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeSeatInvite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeOffer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("inviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("The offer was accepted")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inviteHandle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      seatDesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getRefund'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    invite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeSeatInvite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publicAPI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      makeInvite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" makeSeatInvite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("(In a real contract, whenever we create a new object or array, we recursively\ndeep-freeze it with "),s("code",[t._v("@agoric/harden")]),t._v(". You can "),s("a",{attrs:{href:"https://github.com/Agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[t._v("learn more about "),s("code",[t._v("harden")]),t._v(" here"),s("OutboundLink")],1),t._v(".)")]),t._v(" "),s("p",[s("code",[t._v("automaticRefund")]),t._v(" has one method exposed to the user: "),s("code",[t._v("makeOffer")]),t._v(".\n"),s("code",[t._v("makeOffer")]),t._v(" tells Zoe to complete the offer, which gives the user their payout through Zoe.")]),t._v(" "),s("p",[t._v("A smart contract on Zoe must export a function "),s("code",[t._v("makeContract")]),t._v(" that\ntakes a single parameters: "),s("code",[t._v("zoe")]),t._v(", which is the contract-specific API\nfor Zoe. The smart contract must return an object with two\nproperties:\n"),s("code",[t._v("invite")]),t._v(", an invite to join the contract which will be given to the\nuser who instantiated the contract and "),s("code",[t._v("publicAPI")]),t._v(", the public API to the\ncontract (no invite necessary to call these methods!).")]),t._v(" "),s("h2",{attrs:{id:"diving-deeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diving-deeper"}},[t._v("#")]),t._v(" Diving Deeper")]),t._v(" "),s("p",[t._v("To get a better idea of the usual control flow, let's look at a more\ncomplex smart contract, such as the "),s("code",[t._v("atomicSwap")]),t._v(" contract that we\nmentioned earlier. Someone needs to make the first offer, so let's\nmake sure our user-facing API has a method for that:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeFirstOfferInvite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeFirstOffer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" expected "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectIfNotProposal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeMatchingInvite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inviteHandle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      seatDesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firstOffer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("This is pretty similar in format to the "),s("code",[t._v("automaticRefund")]),t._v(", but there\nare a few changes. First, in this contract, we actually check what was\nescrowed with Zoe to see if it's the kind of offer that we want to\naccept. In this case, we only want to accept offers that have a\nproposal of the form:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("amount1")]),t._v(" and "),s("code",[t._v("amount2")]),t._v(" are amounts with the correct issuers.")]),t._v(" "),s("p",[t._v("Also, this is a swap, so we can't immediately return a payout to the\nuser who puts in the first offer; we have to wait for a valid matching\noffer. So, if we get a valid first offer, we create an invite which can be shared with other parties to create a matching offer.")]),t._v(" "),s("p",[t._v("So, how does the matching happen? We can look at another user-facing\nmethod, "),s("code",[t._v("makeMatchingInvite")]),t._v(", and a helper function, "),s("code",[t._v("swap")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeMatchingInvite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("firstInviteHandle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("matchOffer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstInviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proposal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" want"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" give "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstInviteHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inviteHandle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" give"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Asset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" want"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    seatDesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matchOffer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" invite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("swap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  keepHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  keepHandleInactiveMsg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prior offer is unavailable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOfferActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepHandleInactiveMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("canTradeWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keepAmounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tryAmounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reallocate by switching the amount")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keepHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tryHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallocate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tryAmounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepAmounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  zoe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" defaultAcceptanceMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the "),s("code",[t._v("makeMatchingInvite")]),t._v(" method we call "),s("code",[t._v("swap")]),t._v(", which handles a lot of the logic. First, "),s("code",[t._v("swap")]),t._v(" checks if the offer is still active. If not, we reject the offer at\nhand. Second, if the offer at hand isn't a match for the first offer,\nwe want to reject it for that reason as well.")]),t._v(" "),s("p",[t._v("Once we're sure that we "),s("em",[t._v("do")]),t._v(" have a matching offer, we can do the most\nexciting part, the reallocation.")]),t._v(" "),s("p",[t._v("Smart contracts on Zoe have no access to the underlying\ndigital assets, but they can ask Zoe for information on what was\nescrowed for each offer. That information is in the form of an\n"),s("code",[t._v("amount")]),t._v(', which is a labeled extent. For instance, in "3 bricks", "3" is\nthe extent, and "bricks" is the label. ('),s("router-link",{attrs:{to:"/ertp/guide/"}},[t._v("See more about ERTP fundamentals here")]),t._v(").")],1),t._v(" "),s("p",[t._v("Because this is a swap, we want to literally swap the amounts for the\nfirst offer and the matching offer. That is, the user who put in the\nfirst offer will get what the second user put in and vice versa. "),s("code",[t._v("swap")]),t._v(" makes a call to "),s("code",[t._v("zoe.reallocate")]),t._v(" in order to tell Zoe about this reallocation for the two offers.")]),t._v(" "),s("p",[t._v("Zoe checks two invariants before changing its bookkeeping. First, Zoe\nchecks that offer safety holds for these offers. In other words, does\nthis reallocation either give a refund or give the user what they\nwanted? Second, Zoe checks that asset supply is conserved. This means\nthat we haven't lost or added any digital assets on the whole as a\nresult of this reallocation.")]),t._v(" "),s("p",[t._v("If the reallocation passes, we can tell Zoe to complete the offers and\nsend out payouts with a call to "),s("code",[t._v("zoe.complete")]),t._v(". Note that we can\nreallocate without completing offers, or complete without\nreallocating, depending on the logic of the contract.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);