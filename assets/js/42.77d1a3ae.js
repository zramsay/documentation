(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{247:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#records"}},[t._v("#")]),t._v(" Records")]),t._v(" "),s("Zoe-Version"),t._v(" "),s("p",[t._v("These records (JavaScript objects with data properties and no\nfunctions) are used throughout Zoe.")]),t._v(" "),s("h2",{attrs:{id:"seatandpayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seatandpayout"}},[t._v("#")]),t._v(" SeatAndPayout")]),t._v(" "),s("p",[t._v("This is returned by a call to "),s("code",[t._v("redeem")]),t._v(" on Zoe. A seat is an arbitrary\nobject whose methods allow the user to take certain actions in a\ncontract. The payout is a promise that resolves to an object which has\nkeywords as keys and promises for payments as values. Keywords are\nstrings that must begin with a capital letter and must be ASCII.\nParties to the contract will use the keywords to index their proposal\nand their payments.  Note that while the payout promise resolves when\nan offer is completed, the promise for each payment resolves after the\nremote issuer successfully withdraws the payment.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  seat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someSeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  payout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" paymentKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[t._v("#")]),t._v(" Proposal")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someAmountKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherAmountKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someExitRule\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"issuerkeywordrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuerkeywordrecord"}},[t._v("#")]),t._v(" IssuerKeywordRecord")]),t._v(" "),s("p",[t._v('The keys are keywords, and the values are issuers. These keywords will\nbe used by users to make their proposal. In the below example, "Asset"\nand "Price" are keywords.')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moolaIssuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanIssuer\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountkeywordrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountkeywordrecord"}},[t._v("#")]),t._v(" AmountKeywordRecord")]),t._v(" "),s("p",[t._v('The keys are keywords, and the values are amounts.\nKeywords are unique identifiers per contract, that tie together\nthe proposal, payments to be escrowed, and payouts to the user.\nIn the below example, "Asset" and "Price" are keywords.\nAnd in an auction instance, the keywords might be "Asset" and "Bid".')]),t._v(" "),s("p",[t._v("Users should submit their payments using keywords: "),s("code",[t._v("const payments = { Asset: moolaPayment };")])]),t._v(" "),s("p",[t._v("And, users will receive their payouts with keywords as the keys of a\npayout object: "),s("code",[t._v("moolaPurse.deposit(payout.Asset);")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmathkeywordrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmathkeywordrecord"}},[t._v("#")]),t._v(" AmountMathKeywordRecord")]),t._v(" "),s("p",[t._v("The keys are keywords, and the values are the "),s("router-link",{attrs:{to:"/ertp/guide/amount-math.html"}},[t._v("amountMath")]),t._v(" for\nparticular issuers.")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" record "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ticketAmountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanAmountMath\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Asset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("coerce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tickets3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"exitrule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exitrule"}},[t._v("#")]),t._v(" ExitRule")]),t._v(" "),s("p",[t._v("The possible kinds are 'waived', 'onDemand', and 'afterDeadline'. "),s("code",[t._v("timer")]),t._v(" and "),s("code",[t._v("deadline")]),t._v(" only are used for the "),s("code",[t._v("afterDeadline")]),t._v(" kind.")]),t._v(" "),s("p",[t._v("The possible records are:")]),t._v(" "),s("p",[s("code",[t._v("{ waived: null }")])]),t._v(" "),s("p",[s("code",[t._v("{ onDemand: null }")])]),t._v(" "),s("p",[s("code",[t._v("{ afterDeadline: { timer :Timer, deadline :Deadline} }")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  afterDeadline"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someTimer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deadline"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1893459600")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  waived"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"offerstatuses-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offerstatuses-record"}},[t._v("#")]),t._v(" OfferStatuses Record")]),t._v(" "),s("p",[s("code",[t._v("active")]),t._v(" and "),s("code",[t._v("inactive")]),t._v(" lists of offerHandles.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someListOfOfferHandles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  inactive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherListOfOfferHandles\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"installation-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-record"}},[t._v("#")]),t._v(" Installation Record")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier, used as the table key")]),t._v("\n  installation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contract code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"instance-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-record"}},[t._v("#")]),t._v(" Instance Record")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the instance, used as the table key")]),t._v("\n  installationHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the installation")]),t._v("\n  publicAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the invite-free publicly accessible API for the contract")]),t._v("\n  terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contract parameters")]),t._v("\n  issuerKeywordRecord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// record with keywords keys, issuer values")]),t._v("\n  keywords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// an array of the keywords, in sorted order")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"offer-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offer-record"}},[t._v("#")]),t._v(" Offer Record")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the offer, used as the table key")]),t._v("\n  instanceHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the instance")]),t._v("\n  proposal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the offer proposal (including want, give, exit)")]),t._v("\n  amounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the amountKeywordRecord that will be turned into payouts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);