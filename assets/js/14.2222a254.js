(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"amount-math"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amount-math"}},[t._v("#")]),t._v(" Amount Math")]),t._v(" "),s("p",[t._v("Logic for manipulating amounts.")]),t._v(" "),s("h2",{attrs:{id:"amount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amount"}},[t._v("#")]),t._v(" Amount")]),t._v(" "),s("p",[t._v('Amounts are descriptions of digital assets, answering the questions "how much" and "of what kind". Amounts are extents labeled with a brand. AmountMath executes the logic of how amounts are changed when digital assets are merged, separated, or otherwise manipulated. For example, a deposit of 2 bucks into a purse that already has 3 bucks gives a new balance of 5 bucks. An empty purse has 0 bucks. AmountMath relies heavily on polymorphic MathHelpers, which manipulate the unbranded portion.')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("someAmount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someExtent\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"extent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extent"}},[t._v("#")]),t._v(" Extent")]),t._v(" "),s("p",[t._v("Extents describe the extent of something that can be owned or shared. Fungible extents are normally represented by natural numbers. Other extents may be represented as strings naming a particular right, or an arbitrary object that sensibly represents the rights at issue.")]),t._v(" "),s("p",[t._v("Extent must be Comparable.")]),t._v(" "),s("h2",{attrs:{id:"amountmath-getbrand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-getbrand"}},[t._v("#")]),t._v(" amountMath.getBrand()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Brand}")])])]),t._v(" "),s("p",[t._v("Return the brand.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" issuer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exampleAmountMath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAmountMath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exampleBrand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exampleAmountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBrand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-getmathhelpersname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-getmathhelpersname"}},[t._v("#")]),t._v(" amountMath.getMathHelpersName()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{String}")])])]),t._v(" "),s("p",[t._v("Get the name of the mathHelpers used.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMathHelpersName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'nat'")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-make-allegedextent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-make-allegedextent"}},[t._v("#")]),t._v(" amountMath.make(allegedExtent)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("allegedExtent")]),t._v(" "),s("code",[t._v("{Extent}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Amount}")])])]),t._v(" "),s("p",[t._v("Make an amount from an extent by adding the brand.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" amount837 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("837")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-coerce-allegedamountorextent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-coerce-allegedamountorextent"}},[t._v("#")]),t._v(" amountMath.coerce(allegedAmountOrExtent)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("allegedAmountOrExtent")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Amount}")])])]),t._v(" "),s("p",[t._v("Make sure this amount (or extent) is valid and return it as an amount if so.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bucks50 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("coerce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bucks50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// equal to bucks50")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-extent-amount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-extent-amount"}},[t._v("#")]),t._v(" amountMath.extent(amount)")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Extent}")])])]),t._v(" "),s("p",[t._v("Extract and return the extent.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fungible123 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-getempty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-getempty"}},[t._v("#")]),t._v(" amountMath.getEmpty()")]),t._v(" "),s("ul",[s("li",[t._v("Returns: "),s("code",[t._v("{Amount}")])])]),t._v(" "),s("p",[t._v("Return the amount representing an empty amount. This is the identity element for "),s("code",[t._v("MathHelpers.add()")]),t._v(" and "),s("code",[t._v("MatHelpers.subtract()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns an empty amount for this issuer.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since this is a fungible amount it returns 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-isempty-amount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-isempty-amount"}},[t._v("#")]),t._v(" amountMath.isEmpty(amount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("amount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{boolean}")])])]),t._v(" "),s("p",[t._v("Return true if the amount is empty. Otherwise false.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fungible'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fungible1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns true")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns false")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-isgte-leftamount-rightamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-isgte-leftamount-rightamount"}},[t._v("#")]),t._v(" amountMath.isGTE(leftAmount, rightAmount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("leftAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[s("code",[t._v("rightAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{boolean}")])])]),t._v(" "),s("p",[t._v('Returns true if the leftAmount is greater than or equal to the rightAmount. For non-scalars, "greater than or equal to" depends on the kind of amount, as defined by the MathHelpers. For example, whether rectangle A is greater than rectangle B depends on whether rectangle A includes rectangle B as defined by the logic in MathHelpers.')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fungible'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fungible1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns true")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isGTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns false")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isGTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-isequal-leftamount-rightamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-isequal-leftamount-rightamount"}},[t._v("#")]),t._v(" amountMath.isEqual(leftAmount, rightAmount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("leftAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[s("code",[t._v("rightAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{boolean}")])])]),t._v(" "),s("p",[t._v("Returns true if the leftAmount equals the rightAmount. We assume that if isGTE is true in both directions, isEqual is also true.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fungible'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fungible1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" anotherFungible1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns true")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEqual")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anotherFungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns false")]),t._v("\namountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEqual")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fungible1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-add-leftamount-rightamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-add-leftamount-rightamount"}},[t._v("#")]),t._v(" amountMath.add(leftAmount, rightAmount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("leftAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[s("code",[t._v("rightAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Amount}")])])]),t._v(" "),s("p",[t._v("Returns a new amount that is the union of both leftAmount and rightAmount.")]),t._v(" "),s("p",[t._v("For fungible amount this means adding the extents. For other kinds of amount, it usually means including all of the elements from both left and right.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myItems'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strSet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listAmountA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("harden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listAmountB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("harden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns ['1', '2', '4', '3']")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" combinedList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listAmountA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listAmountB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"amountmath-subtract-leftamount-rightamount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amountmath-subtract-leftamount-rightamount"}},[t._v("#")]),t._v(" amountMath.subtract(leftAmount, rightAmount)")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("leftAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[s("code",[t._v("rightAmount")]),t._v(" "),s("code",[t._v("{Amount}")])]),t._v(" "),s("li",[t._v("Returns: "),s("code",[t._v("{Amount}")])])]),t._v(" "),s("p",[t._v("Returns a new amount that is the leftAmount minus the rightAmount (i.e. everything in the leftAmount that is not in the rightAmount). If leftAmount doesn't include rightAmount (subtraction results in a negative), throw  an error. Because the left amount must include the right amount, this is NOT equivalent to set subtraction.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" amountMath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produceIssuer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myItems'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strSet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listAmountA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("harden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listAmountB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("harden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listAmountC "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("harden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns ['1', '4']")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subtractedList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listAmountA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listAmountC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" badList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amountMath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subtract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listAmountA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listAmountB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);