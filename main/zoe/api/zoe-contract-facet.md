# Zoe Contract Facet

<Zoe-Version/>

A Zoe Contract Facet is an API object for a running contract instance to access the Zoe state for that instance. A Zoe Contract Facet is accessed synchronously from within the contract, and usually is referred to in code as `zcf`. The contract instance is launched by `E(zoe).makeInstance`, and is given access to the `zcf` object during that launch. In the operation below, the `instanceHandle` is the handle for the running contract instance.

## zcf.reallocate(offerHandles, reallocation)
- `offerHandles` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>
- `reallocation` <router-link to="/zoe/api/records.html#amountkeywordrecord">`{Array <AmountKeywordRecord>}`</router-link>

Instruct Zoe to try reallocating for the given `offerHandles`. Reallocation is an array of `AmountKeywordRecords`, which are objects where the keys are keywords and the values are amounts. The amount to be paid to the player who made the offer at the same index in the `offerHandles` array. The reallocation will only happen if 'offer safety' and conservation of rights are true, as enforced by Zoe.

```js
import harden from '@agoric/harden';

// reallocate by switching the amount of the firstOffer and matchingOffer
zoe.reallocate(
  harden([firstOfferHandle, matchingOfferHandle]),
  harden([matchingOfferAmount, firstOfferAmount]),
);
```

## zcf.complete(offerHandles)
- `offerHandles` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>

Eject the offer, taking the current allocation for that offer and creating payments to be returned to the user. No 'offer safety' checks are done here because any previous reallocation performed those checks.

```js
import harden from '@agoric/harden';

zoe.complete(harden([someOfferHandle]));
```

## zcf.addNewIssuer(issuer, keyword)
- `issuer` <router-link to="/ertp/api/issuer.html">`{Issuer}`</router-link>
- `keyword` `{String}`
- Returns: `{Promise}`

Inform Zoe about a new issuer. Returns a promise for acknowledging when the issuer is added and ready.

```js
zoe.addNewIssuer(liquidityIssuer, 'Liquidity').then(() => {
  //do stuff
});
```

## zcf.getZoeService()
- Returns: <router-link to="/zoe/api/zoe.html#zoe">`{ZoeService}`</router-link>

Expose the user-facing <router-link to="/zoe/api/zoe.html#zoe">Zoe Service API</router-link> to the contracts as well.

## zcf.MakeInvitation(offerHook, customProperties)
- `offerHook` `{OfferHandle => Object}`
- `customProperties` `{Object}`
- Returns: <router-link to="/ertp/api/payment.html#payment">`{Invite}`</router-link>

Make a credible Zoe invite for the associated smart contract. The Invite
is a `Payment` minted from Zoe's internal `inviteMint`. It can be used
in `E(zoe).offer` for the holder of it to participate in this contract.

When an offer is submitted via the invitation, `offerHook` will be
invoked in the contract with a handle for the offer. The result of the
`offerHook` will be returned as the "outcome" of making the offer via
the invitation.

The `customProperties` is an object whose properties contain information
as defined by the smart contract, to include in the extent of the
invitation.

```js
const invite = zoe.makeInvitation(
  myAuction.onNewOffer,
  { inviteDesc: 'bid', auctionedAssets: tickets3, minimumBid: simoleans100 }
);
```

## zcf.getInviteIssuer()
- Returns: <router-link to="/ertp/api/issuer.html">`{Issuer}`</router-link>

Get the Zoe `inviteIssuer`.

```js
const inviteIssuer = await E(zoe).getInviteIssuer();
```

## zcf.getAmountMaths(keywords)
- `keywords` `{Array <String>}`
- Returns: <router-link to="/zoe/api/records.html#amountmathkeywordrecord">`{AmountMathKeywordRecord}`</router-link>

Pass in an array of keywords and get an amountMathKeywordRecord in return.

```js
const amountMathKeywordRecord = zoe.getAmountMaths(['Asset', 'Price']);
```

## zcf.isOfferActive(offerHandle)
- `offerHandles` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>
- Returns: `{Boolean}`

Check if the offer is still active. This method does not throw if the offer is inactive.

```js
const isActive = zoe.isOfferActive(someOfferHandle);
```

## zcf.getOfferStatuses(offerHandles)
- `offerHandles` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>
- Returns: <router-link to="/zoe/api/records.html#offerstatuses-record">`{OfferStatusesRecord}`</router-link>

Divide the `offerHandles` into 'active' and 'inactive' lists

```js
const { active: activeBidHandles } = zoe.getOfferStatuses(
  harden(allBidHandles),
);
```

## zcf.getOffers(offerHandles)
- `offerHandles` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>
- Returns: <router-link to="/zoe/api/records.html#offer-record">`{Array <OfferRecord>}`</router-link>

Get a list of offer records.

```js
const offers = zoe.getOffers(listOfOfferHandles);
```

## zcf.getOffer(offerHandle)
- `offerHandle` <router-link to="/glossary/#handle">`{Array <Handle>}`</router-link>
- Returns: <router-link to="/zoe/api/records.html#offer-record">`{<OfferRecord>}`</router-link>

Get the offer record.

```js
const { payoutRules } = zoe.getOffer(offerHandle);
```

## zcf.getInstanceRecord()
- Returns: <router-link
  to="/zoe/api/records.html#instance-record-properties">`{InstanceRecord}`</router-link>


Get the instance record. This allows the contracts to get access
to their keywords, issuers and other "instanceRecord" information from
Zoe.

```js
const { issuerKeywordRecord, keywords, terms } = zoe.getInstanceRecord()
```
