(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{254:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zoe-offer-safety-enforcement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoe-offer-safety-enforcement"}},[t._v("#")]),t._v(" Zoe: Offer-Safety Enforcement")]),t._v(" "),e("Zoe-Version"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Pre-alpha status")]),t._v(" "),e("p",[t._v("Zoe is currently at the pre-alpha stage. It has not yet been\nformally tested or hardened.")])]),t._v(" "),e("p",[t._v("This guide assumes some knowledge of the "),e("router-link",{attrs:{to:"/ertp/guide/"}},[t._v("ERTP\nfundamentals")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"what-is-zoe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-zoe"}},[t._v("#")]),t._v(" What is Zoe?")]),t._v(" "),e("p",[e("strong",[t._v("For users")]),t._v(": Zoe guarantees that as a user of a smart contract, you\nwill either get what you wanted or get a full refund, even if the\nsmart contract is buggy or malicious. (In fact, the smart contract\nnever has access to your digital assets.)")]),t._v(" "),e("p",[e("strong",[t._v("For developers")]),t._v(": Zoe provides a safety net so you can focus on what\nyour smart contract does best, without worrying about your users\nlosing their assets due to a bug in the code that you wrote. Writing a\nsmart contract on Zoe is easy: all of the Zoe smart contracts are\nwritten in the familiar language of JavaScript.")]),t._v(" "),e("h2",{attrs:{id:"sounds-like-magic-how-does-it-actually-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sounds-like-magic-how-does-it-actually-work"}},[t._v("#")]),t._v(" Sounds like magic. How does it actually work?")]),t._v(" "),e("p",[t._v('To use Zoe, we put things in terms of "offers". An offer proposal is a\nstatement about what you want and what you\'re willing to offer. It\nturns out, many smart contracts (apart from gifts and one-way\npayments) involve an exchange of digital assets that can be put in\nterms of offer proposals.')]),t._v(" "),e("p",[t._v("In this version of Zoe, our offer proposals are simple (see "),e("router-link",{attrs:{to:"/zoe/roadmap/"}},[t._v("our\nroadmap")]),t._v(" for more complex proposal types). We\ncan say things like, \"I'll give you "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Catan",target:"_blank",rel:"noopener noreferrer"}},[t._v("three wood for two\nbricks"),e("OutboundLink")],1),t._v('." '),e("router-link",{attrs:{to:"/zoe/guide/proposal.html"}},[t._v("Learn more about the\nparticulars of structuring an offer proposal here")]),t._v(".")],1),t._v(" "),e("p",[t._v("Offers are a structured way of describing user intent. To a certain\nextent, an offer's rules (called a "),e("em",[t._v("proposal")]),t._v(") are the user's\n"),e("em",[t._v("contractual understanding")]),t._v(" of the agreement they are entering into.\nYou might have noticed that the offer doesn't specify the mechanism by\nwhich the exchange happens. The offer doesn't say whether the item you\nwant is up for auction, in an exchange, or part of a private trade.\nThe offer doesn't mention the particular mechanism because an\nimportant part of the design of Zoe is a "),e("strong",[t._v("separation of concerns")]),t._v('.\nZoe is responsible for enforcing what we call "offer safety", and the\nsmart contract that runs on top of Zoe is responsible for figuring out\na proposed reallocation of resources. To use an auction as an example,\nthe smart contract is responsible for figuring out who wins the\nauction and how much they pay, but Zoe handles the escrowing of the\nbids and the payments. You can think of this as similar to e-commerce\nwebsites using a separate payment-processor so that they don\'t have to\nhandle the credit cards themselves.')]),t._v(" "),e("h3",{attrs:{id:"what-is-offer-safety"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-offer-safety"}},[t._v("#")]),t._v(' What is "offer safety"?')]),t._v(" "),e("p",[t._v("Zoe guarantees offer safety, meaning that when a user makes an offer\nthat is escrowed with Zoe, Zoe guarantees that the user will either\nget back why they said they wanted, or the user will get back what they\noriginally offered.")]),t._v(" "),e("p",[t._v("When a user escrows with Zoe, they get a few things back immediately:\nan "),e("code",[t._v("outcome")]),t._v(", and a JavaScript promise for a future payout. The\n"),e("code",[t._v("outcome")]),t._v(" is a promise for the return value of making the offer. Let's\nlook a particular example to see how this works.")]),t._v(" "),e("h2",{attrs:{id:"an-example-a-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-example-a-swap"}},[t._v("#")]),t._v(" An example: A swap")]),t._v(" "),e("p",[t._v("I want to trade my three bricks for five wool. You realize you have\nfive wool and agree to the deal. Without Zoe, though, you might send\nme the five wool, and I might disappear without ever giving you the\nthree bricks in return. With Zoe, we can safely trade with each other,\neven if we don't trust one another. We are assured that at worst, if\nthe swap contract behaves badly, we will both get a refund, and at\nbest, we'll get what we each wanted.")]),t._v(" "),e("p",[t._v("Let's look at the basic "),e("code",[t._v("atomicSwap")]),t._v(" contract ("),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/atomicSwap.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("full text of\nthe real contract"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("p",[t._v("Here's a high-level overview of what would happen:")]),t._v(" "),e("ol",[e("li",[t._v("I make an instance of the swap contract.")]),t._v(" "),e("li",[t._v("I escrow my three bricks with Zoe and make my offer. In return, I\nget an invite to join the contract as the matching offer, and  a\npromise for a payout. I send you the invite.")]),t._v(" "),e("li",[t._v("You inspect the invite and verify that it was created using the\n"),e("code",[t._v("atomicSwap")]),t._v(" contract code.")]),t._v(" "),e("li",[t._v("You use your invite to escrow your offer (offering five wool for\nthree bricks) with Zoe, making a matching offer. You get an outcome\nand a promise for a payout in return.")]),t._v(" "),e("li",[t._v("The offer matches and both of our payout promises resolve, mine to\nthe five wool that I wanted, and yours to the three bricks that you\nwanted. Success!")])]),t._v(" "),e("h2",{attrs:{id:"how-to-write-smart-contracts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-smart-contracts"}},[t._v("#")]),t._v(" How to write smart contracts")]),t._v(" "),e("p",[t._v("Writing smart contracts that run on Zoe is easy, but let's look\nat a simple contract. This contract only does one thing, and\nit's pretty useless - it gives you back what you put in. Let's call it\n"),e("code",[t._v("automaticRefund")]),t._v(". Let's say the code of "),e("code",[t._v("automaticRefund")]),t._v(" looks like\nthis (see the "),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/blob/master/packages/zoe/src/contracts/automaticRefund.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("real contract code\nhere"),e("OutboundLink")],1),t._v("):")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" makeContract "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("zcf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("refundOfferHook")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("offerHandle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("offerHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("The offer was accepted")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeRefundInvite")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeInvitation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      offerHook"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" refundOfferHook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      customProperties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inviteDesc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getRefund'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    invite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeRefundInvite")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publicAPI"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      makeInvite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" makeRefundInvite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("(In a real contract, whenever we create a new object or array, we recursively\ndeep-freeze it with "),e("code",[t._v("@agoric/harden")]),t._v(". You can "),e("a",{attrs:{href:"https://github.com/Agoric/harden",target:"_blank",rel:"noopener noreferrer"}},[t._v("learn more about "),e("code",[t._v("harden")]),t._v(" here"),e("OutboundLink")],1),t._v(".)")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("automaticRefund")]),t._v(" contract behavior is implemented in "),e("code",[t._v("refundOfferHook")]),t._v(".\nIt just tells Zoe to complete the offer, which gives the user their payout\nthrough Zoe.")]),t._v(" "),e("p",[t._v("A smart contract on Zoe must export a function "),e("code",[t._v("makeContract")]),t._v(" that\ntakes a single parameters: "),e("code",[t._v("zcf")]),t._v(", which is the contract-internal API\nfor Zoe. The smart contract must return an object with two\nproperties:\n"),e("code",[t._v("invite")]),t._v(", an invite to join the contract, which will be given to the\nuser who instantiated the contract, and "),e("code",[t._v("publicAPI")]),t._v(", the public API to the\ncontract (no invite necessary to call these methods!).")]),t._v(" "),e("h2",{attrs:{id:"diving-deeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diving-deeper"}},[t._v("#")]),t._v(" Diving Deeper")]),t._v(" "),e("p",[t._v("To get a better idea of the usual control flow, let's look at a more\ncomplex smart contract, such as the "),e("code",[t._v("atomicSwap")]),t._v(" contract that we\nmentioned earlier. Someone needs to make the first offer, so let's\nmake sure our user-facing API has a method for that:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeFirstOfferInvite")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("inviteAnOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    offerHook"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" makeMatchingInvite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customProperties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      inviteDesc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firstOffer'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    expected"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      give"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Asset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      want"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Price"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This is pretty similar in format to the "),e("code",[t._v("automaticRefund")]),t._v(", but there\nare a few changes. First, in this contract, we use the\n"),e("router-link",{attrs:{to:"/zoe/api/zoe-helpers.html#zoehelper-inviteanoffer-options"}},[e("code",[t._v("inviteAnOffer")]),t._v(" helper function")]),t._v(" to\nmake an invite that will actually check what was\nescrowed with Zoe to see if it's the kind of offer that we want to\naccept. In this case, we only want to accept offers that have a\nproposal of the form:")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" give"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Asset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" want"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Price"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amount2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("where "),e("code",[t._v("amount1")]),t._v(" and "),e("code",[t._v("amount2")]),t._v(" are amounts with the correct issuers.")]),t._v(" "),e("p",[t._v("Also, this is a swap, so we can't immediately return a payout to the\nuser who puts in the first offer; we have to wait for a valid matching\noffer. So, if we get a valid first offer, we create an invite which can\nbe shared with other parties to create a matching offer.")]),t._v(" "),e("p",[t._v("So, how does the matching happen? We can look at another user-facing\nmethod, "),e("code",[t._v("makeMatchingInvite")]),t._v(", and a helper function, "),e("code",[t._v("swap")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makeMatchingInvite")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("firstOfferHandle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proposal"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" want"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" give "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("inviteAnOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("offerHook")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("offerHandle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstOfferHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offerHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customProperties"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      asset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" give"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Asset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      price"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" want"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      inviteDesc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'matchOffer'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("In the "),e("code",[t._v("makeMatchingInvite")]),t._v(" method we call the "),e("router-link",{attrs:{to:"/zoe/api/zoe-helpers.html#zoehelper-swap-keephandle-tryhandle-keephandleinactivemsg"}},[e("code",[t._v("swap")]),t._v(" helper function")]),t._v(", which handles a lot of the logic. The code for "),e("code",[t._v("swap")]),t._v(" is:")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  swap"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    keepHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keepHandleInactiveMsg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prior offer is unavailable'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOfferActive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" helpers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepHandleInactiveMsg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("helpers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("canTradeWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" helpers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectOffer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keepAmounts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAllocation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keepHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tryAmounts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentAllocation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reallocate by switching the amount")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handles "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keepHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tryHandle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reallocate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tryAmounts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepAmounts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    zcf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" defaultAcceptanceMsg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("First, "),e("code",[t._v("swap")]),t._v(" checks if the offer is still\nactive. If not, we reject the offer at hand. Second, if the offer\nat hand isn't a match for the first offer, we want to reject it\nfor that reason as well.")]),t._v(" "),e("p",[t._v("Once we're sure that we "),e("em",[t._v("do")]),t._v(" have a matching offer, we can do the most\nexciting part, the reallocation.")]),t._v(" "),e("p",[t._v("Smart contracts on Zoe have no access to the underlying\ndigital assets, but they can ask Zoe for information on what was\nescrowed for each offer. That information is in the form of an\n"),e("code",[t._v("amount")]),t._v(', which is a labeled extent. For instance, in "3 bricks", "3" is\nthe extent, and "bricks" is the label. ('),e("router-link",{attrs:{to:"/ertp/guide/"}},[t._v("See more about ERTP fundamentals here")]),t._v(").")],1),t._v(" "),e("p",[t._v("Because this is a swap, we want to literally swap the amounts for the\nfirst offer and the matching offer. That is, the user who put in the\nfirst offer will get what the second user put in and vice versa. "),e("code",[t._v("swap")]),t._v(" makes a call to "),e("code",[t._v("zoe.reallocate")]),t._v(" in order to tell Zoe about this reallocation for the two offers.")]),t._v(" "),e("p",[t._v("Zoe checks two invariants before changing its bookkeeping. First, Zoe\nchecks that offer safety holds for these offers. In other words, does\nthis reallocation either give a refund or give the user what they\nwanted? Second, Zoe checks that asset supply is conserved. This means\nthat we haven't lost or added any digital assets on the whole as a\nresult of this reallocation.")]),t._v(" "),e("p",[t._v("If the reallocation passes, we can tell Zoe to complete the offers and\nsend out payouts with a call to "),e("code",[t._v("zoe.complete")]),t._v(". Note that we can\nreallocate without completing offers, or complete without\nreallocating, depending on the logic of the contract.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);