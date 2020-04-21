(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{259:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-structure-of-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-structure-of-proposals"}},[t._v("#")]),t._v(" The Structure of Proposals")]),t._v(" "),a("Zoe-Version"),t._v(" "),a("h2",{attrs:{id:"making-an-offer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-an-offer"}},[t._v("#")]),t._v(" Making an offer")]),t._v(" "),a("p",[t._v("In order to make an offer, you must provide two things: the payments\nthat will be escrowed as part of the offer, and a statement of the\nconditions of the offer. This statement, which is approved by the user\nin their wallet, is known as the proposal.")]),t._v(" "),a("h2",{attrs:{id:"structure-of-the-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-the-proposal"}},[t._v("#")]),t._v(" Structure of the proposal")]),t._v(" "),a("p",[t._v("Proposals are objects with "),a("code",[t._v("give")]),t._v(", "),a("code",[t._v("want")]),t._v(" and "),a("code",[t._v("exit")]),t._v(" keys.")]),t._v(" "),a("p",[a("code",[t._v("give")]),t._v(" and "),a("code",[t._v("want")]),t._v(' utilize keywords defined by the contract.\nKeywords are unique identifiers per contract, that tie together the proposal,\npayments to be escrowed, and payouts to the user.\nIn the example below, "Asset" and "Price" are the keywords. In an auction, however,\nthe keywords might be "Asset" and "Bid".')]),t._v(" "),a("p",[a("code",[t._v("exit")]),t._v(" determines when the user can cancel their offer. The possible kinds are:")]),t._v(" "),a("ol",[a("li",[t._v("'onDemand': the user can cancel on demand")]),t._v(" "),a("li",[t._v("'afterDeadline': the user's offer is automatically cancelled after\na deadline. This option requires additional properties: a timer\nobject and a deadline.")]),t._v(" "),a("li",[t._v("'waived': the user agrees that they can't cancel and they are\nrelying entirely on the smart contract to complete their offer\npromptly.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" carolsProposal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  give"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moola")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  want"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("simoleans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" afterDeadline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deadline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);