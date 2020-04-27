(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{251:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#records"}},[t._v("#")]),t._v(" Records")]),t._v(" "),a("Zoe-Version"),t._v(" "),a("p",[t._v("These records (JavaScript objects with data properties and no\nfunctions) are used throughout Zoe.")]),t._v(" "),a("h2",{attrs:{id:"offerresultrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offerresultrecord"}},[t._v("#")]),t._v(" OfferResultRecord")]),t._v(" "),a("p",[t._v("This is returned in a promise by a call to "),a("code",[t._v("offer")]),t._v(" on Zoe. It contains\npromises for handle for querying Zoe about the offer, the payouts\nwhen the offer is complete, the result of invoking the contract-specific\nhook associated with the invitation, and if appropriate for the specified\n"),a("code",[t._v("exit")]),t._v(" policy, a remote object with a "),a("code",[t._v("cancel")]),t._v(" operation to cancel the\noffer.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("offerHandle")]),t._v(" promise fulfills once the payments in the offer have\nbeen escrowed. The "),a("code",[t._v("contractOfferPromise")]),t._v(" is from the contract, and so\ndepends on the contract code. The "),a("code",[t._v("paymentKeywordRecordPromise")]),t._v(" gets\nresolved by Zoe when the corresponding offer is completed (i.e.,\nwhen the offer exits).")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  offerHandle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" offerHandlePromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  outcome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" contractOfferPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  payout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" paymentKeywordRecordPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cancelObj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" remoteCancelObj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[t._v("#")]),t._v(" Proposal")]),t._v(" "),a("p",[t._v("A Proposal has three parts: "),a("code",[t._v("want")]),t._v(" and "),a("code",[t._v("give")]),t._v(" are used\nby Zoe to enforce offer safety; "),a("code",[t._v("exit")]),t._v(" is used to specify\nthe particular payout-liveness policy that Zoe can guarantee.\n"),a("code",[t._v("want")]),t._v(" and "),a("code",[t._v("give")]),t._v(" are objects with keywords as keys and amounts\nas values.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someAmountKeywordRecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherAmountKeywordRecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someExitRule\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"issuerkeywordrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuerkeywordrecord"}},[t._v("#")]),t._v(" IssuerKeywordRecord")]),t._v(" "),a("p",[t._v('The keys are keywords, and the values are issuers. These keywords will\nbe used by users to make their proposal. In the below example, "Asset"\nand "Price" are keywords.')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moolaIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanIssuer\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"paymentkeywordrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paymentkeywordrecord"}},[t._v("#")]),t._v(" PaymentKeywordRecord")]),t._v(" "),a("p",[t._v("The keys are keywords, and the values are payments")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moolaPayment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanPayment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"amountkeywordrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amountkeywordrecord"}},[t._v("#")]),t._v(" AmountKeywordRecord")]),t._v(" "),a("p",[t._v('The keys are keywords, and the values are amounts.\nKeywords are unique identifiers per contract, that tie together\nthe proposal, payments to be escrowed, and payouts to the user.\nIn the below example, "Asset" and "Price" are keywords.\nAnd in an auction instance, the keywords might be "Asset" and "Bid".')]),t._v(" "),a("p",[t._v("Users should submit their payments using keywords: "),a("code",[t._v("const payments = { Asset: moolaPayment };")])]),t._v(" "),a("p",[t._v("And, users will receive their payouts with keywords as the keys of a\npayout object: "),a("code",[t._v("moolaPurse.deposit(payout.Asset);")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" amountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"amountmathkeywordrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amountmathkeywordrecord"}},[t._v("#")]),t._v(" AmountMathKeywordRecord")]),t._v(" "),a("p",[t._v("The keys are keywords, and the values are the "),a("router-link",{attrs:{to:"/ertp/guide/amount-math.html"}},[t._v("amountMath")]),t._v(" for\nparticular issuers.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" record "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Asset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ticketAmountMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" simoleanAmountMath\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coerce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tickets3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"exitrule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitrule"}},[t._v("#")]),t._v(" ExitRule")]),t._v(" "),a("p",[t._v("The possible kinds are 'waived', 'onDemand', and 'afterDeadline'. "),a("code",[t._v("timer")]),t._v(" and "),a("code",[t._v("deadline")]),t._v(" only are used for the "),a("code",[t._v("afterDeadline")]),t._v(" kind.")]),t._v(" "),a("p",[t._v("The possible records are:")]),t._v(" "),a("p",[a("code",[t._v("{ waived: null }")])]),t._v(" "),a("p",[a("code",[t._v("{ onDemand: null }")])]),t._v(" "),a("p",[a("code",[t._v("{ afterDeadline: { timer :Timer, deadline :Deadline} }")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  afterDeadline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someTimer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deadline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1893459600")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  waived"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"offerstatuses-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offerstatuses-record"}},[t._v("#")]),t._v(" OfferStatuses Record")]),t._v(" "),a("p",[a("code",[t._v("active")]),t._v(" and "),a("code",[t._v("inactive")]),t._v(" lists of offerHandles.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  active"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someListOfOfferHandles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  inactive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherListOfOfferHandles\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"installation-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-record"}},[t._v("#")]),t._v(" Installation Record")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier, used as the table key")]),t._v("\n  installation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contract code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"instance-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-record"}},[t._v("#")]),t._v(" Instance Record")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the instance, used as the table key")]),t._v("\n  installationHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the installation")]),t._v("\n  publicAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the invite-free publicly accessible API for the contract")]),t._v("\n  terms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contract parameters")]),t._v("\n  issuerKeywordRecord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// record with keywords keys, issuer values")]),t._v("\n  keywords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// an array of the keywords, in sorted order")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"offer-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offer-record"}},[t._v("#")]),t._v(" Offer Record")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the offer, used as the table key")]),t._v("\n  instanceHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// opaque identifier for the instance")]),t._v("\n  proposal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the offer proposal (including want, give, exit)")]),t._v("\n  amounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the amountKeywordRecord that will be turned into payouts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);