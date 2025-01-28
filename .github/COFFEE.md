# Buy Me a Coffee API Documentation

## Buy Me a Coffee API
Personal Access Token
Here is my new personal access token. This is the only time it will be shown so don't lose it! You may now use this token to make API requests.

Personal Access Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTI5ZDIwMC1kYTdkLTRjY2MtOWQzZC01ODA0MTU0ZTgyMjYiLCJqdGkiOiI1MzYwYzJhYzNlYjJjNjI1YzQ4NGViOTEzYjJjZGU4OGUyNWUwZTU3OTAwMzYyNmViZTEyZDU3NDBmNGQ1NTViMzZjMjBkNmRlZTliMDJjZSIsImlhdCI6MTczNzk5NzIzOCwibmJmIjoxNzM3OTk3MjM4LCJleHAiOjE3NTM2MzU2MzgsInN1YiI6IjQ0NDMzMTciLCJzY29wZXMiOlsicmVhZC1vbmx5Il19.M_m1HDvTUysewuDaOEO_9cZ5iLR57vgjvxMq08hHNvzcuILdpiIOQ3ZnFLcpHio0nlIQeWEoHHtIZ-gNNYGBjWDX-QiUoNfeitdug7wda9E21a05JCb7LvPxIyS6nNsc0cwUudLzTSe8UN4oc_BLV0HqEjCtucCPNIZs8m7dRgPBoPsV-57tfxCmZUVp_zYE_gxLEgbVcnC1SM8RX4ilseeI_PRQPp_Cf0RILyTITiWugWz-JP6KcRanxIGdt92oo2JdBsORWMJKq9YBH9U1NLyA69bUPXJ10EwGWxo0aZIxE-O9TQCzGXlQ8uB2ArK-scminrce5UMH4dfgAMqtMtQJrjc3Bwb6RoQbg-sTPJ6Kt5fhseXAUN_webOSzIE3CMDQsdmPECCAqFe0gQ3pl8iJKbV_z0YaeBKoFI5Q7bWr-vhfO5DkRX1ML1g8Ull8eBG-cP4YUDSCh-6CKQi7GkxLHhxKgwNTCPk0sgd5E8Q-kCKyaeyRoAJbDiajcEqjrEhzv79oUWoLjn8pbMprLNzHR9vazjHk29NYyKMW3445La-LFe_t5lKMJnPHoPoIHGfb7ziiNA3B3cb7A-cZkdtcnu-aU_8rrJWxGGHX9gtRL2MbAFwSdv9M4FM7-pQ2pfe6sMD-6Yv8SsKue2afaLc1gTjH6r1T_cGSktWrr4g


## Introduction
Start building exciting apps using the Buy Me a Coffee API. Our OAuth API is based around REST, and we return JSON for every request, including errors.

You can start using the Buy Me a Coffee API by creating an access token from the developer dashboard. Please note that, due to certain security concerns, the API currently doesn't support in-browser requests such as browser extensions and client-side JavaScript.

## Authentication
We use token-based authentication. Please log-in to your Buy Me a Coffee developer dashboard using the login button above. If you are already logged in to your Buy Me a Coffee account, you will be automatically redirected to the developer dashboard. Otherwise, you can use your Buy Me a Coffee account credentials to log-in.

After logging in, please generate your token by clicking on the "generate my token" button. Provide a name for your token and click "generate". Your token will be displayed, save it to a safe place. You can create any number of tokens for a variety of applications.

> We are also working on adding analytics information for the keys and other advanced features, which will be available in the near future.

## Scopes
We've provided only one scope that you may request when the user authorizes your application:

- `read-only`: read-only access to the user's public information and products.

> Scopes with write permissions will be launched soon. Stay tuned to our creator community for more information.

## API Errors
Buy Me a Coffee uses HTTP status codes to indicate the status of a request. Here's a run down on likely response codes:

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Everything worked as expected |
| 400 | Bad Request - You probably missed a required parameter |
| 401 | Unauthorized - You did not provide a valid access token |
| 402 | Request Failed - The parameters were valid but request failed |
| 404 | Not Found - The requested item doesn't exist |
| 500, 502, 503, 504 | Server Error - Something went wrong on our end |

We provide a JSON object that goes more in-depth about the problem that led to the failed request. Here is a sample error response:

```json
{
  "error_code": 45,
  "reason": "Requested attribute is not retrievable for the user"
}
```

## API Reference

### Methods
Buy Me a Coffee's OAuth 2.0 API allows you to gather various read/only data from your account and also allows you to trigger certain actions (which are not made public yet). You can get information about your supporters and members like get supporters data, get membership data, complete transaction details etc. Also you can get details about your Extra purchases.

### All Supporters
Gather all of your membership and onetime data, although write actions are not available at this moment.

#### Members `/v1/subscriptions`
This endpoint will return all of your members with both active and inactive statuses.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| status | string | `active`: get all active members<br>`inactive`: get all inactive members<br>`all`: get all members |

**cURL Request Format:**
```bash
curl https://developers.buymeacoffee.com/api/v1/subscriptions?status=active \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -X GET
```

**Example Response:**
```json
{
    "current_page": 1,
    "data": [
        {
            "subscription_id": 10647,
            "subscription_cancelled_on": null,
            "subscription_created_on": "2020-07-29 15:15:22",
            "subscription_updated_on": "2020-07-29 15:15:22",
            "subscription_current_period_start": "2020-07-29 15:15:18",
            "subscription_current_period_end": "2020-08-29 15:15:18",
            "subscription_coffee_price": "1.000",
            "subscription_coffee_num": 1,
            "subscription_is_cancelled": null,
            "subscription_is_cancelled_at_period_end": null,
            "subscription_currency": "USD",
            "subscription_message": null,
            "message_visibility": 1,
            "subscription_duration_type": "month",
            "referer": null,
            "country": null,
            "transaction_id": "sub_HjkUcn*******",
            "payer_email": "ronald.thyu@gmail.org",
            "payer_name": "ronald.thomas"
        }
    ],
    "first_page_url": "https://developers.buymeacoffee.com/api/v1/subscriptions?page=1",
    "from": 1,
    "last_page": 36,
    "last_page_url": "https://developers.buymeacoffee.com/api/v1/subscriptions?page=36",
    "next_page_url": "https://developers.buymeacoffee.com/api/v1/subscriptions?page=2",
    "path": "https://developers.buymeacoffee.com/api/v1/subscriptions",
    "per_page": 5,
    "prev_page_url": null,
    "to": 5,
    "total": 179
}
```

#### Members by ID `/v1/subscriptions/{id}`
This endpoint will return membership details by passing its unique ID.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| id | integer | Unique ID of the membership |

**cURL Request Format:**
```bash
curl https://developers.buymeacoffee.com/api/v1/subscriptions/7979 \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -X GET
```

**Example Response:**
```json
{
  "subscription_id": 7979,
  "subscription_cancelled_on": null,
  "subscription_created_on": "2020-06-03 05:25:03",
  "subscription_updated_on": "2020-06-03 05:25:03",
  "subscription_current_period_start": "2020-06-03 05:25:03",
  "subscription_current_period_end": "2025-06-03 05:25:03",
  "subscription_coffee_price": "0.000",
  "subscription_coffee_num": 1,
  "subscription_is_cancelled": null,
  "subscription_is_cancelled_at_period_end": null,
  "subscription_currency": "USD",
  "subscription_message": null,
  "message_visibility": 1,
  "subscription_duration_type": "lifetime-giveaway",
  "referer": null,
  "country": null,
  "transaction_id": "GIVE_AWAY",
  "payer_email": "rfy8jzy0yo@myinbox.icu",
  "payer_name": "rfy8jzy0yo"
}
```

#### Onetime-supporters `/v1/supporters`
This endpoint returns all of your onetime supporters and their messages if any.

**Parameters:** None

**cURL Request Format:**
```bash
curl https://developers.buymeacoffee.com/api/v1/supporters \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -X GET
```

**Example Response:**
```json
{
  "current_page": 1,
  "data": [
    {
      "support_id": 245731,
      "support_note": null,
      "support_coffees": 1,
      "transaction_id": "3JV542690H0XXX",
      "support_visibility": 1,
      "support_created_on": "2020-08-05 09:38:26",
      "support_updated_on": "2020-08-05 09:38:26",
      "transfer_id": null,
      "supporter_name": null,
      "support_coffee_price": "1.0000",
      "support_email": "****@gmail.com",
      "is_refunded": null,
      "support_currency": "GBP",
      "support_note_pinned": 0,
      "referer": null,
      "country": "IN",
      "payer_email": "*****@gmail.com",
      "payment_platform": "paypal",
      "payer_name": "** Fora"
    }
  ],
  "first_page_url": "https://developers.buymeacoffee.com/api/v1/supporters?page=1",
  "from": 1,
  "last_page": 2,
  "last_page_url": "https://developers.buymeacoffee.com/api/v1/supporters?page=2",
  "next_page_url": "https://developers.buymeacoffee.com/api/v1/supporters?page=2",
  "path": "https://developers.buymeacoffee.com/api/v1/supporters",
  "per_page": 5,
  "prev_page_url": null,
  "to": 5,
  "total": 10
}
```

#### Onetime-supporters by ID `/v1/supporters/{id}`
This endpoint will return all of your onetime supporters and their messages by their unique ID.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| id | integer | The unique ID of the support |

**cURL Request Format:**
```bash
curl https://developers.buymeacoffee.com/api/v1/supporters/76789 \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -X GET
```

**Example Response:**
```json
{
  "support_id": 245731,
  "support_note": null,
  "support_coffees": 1,
  "transaction_id": "3JV542690H05****",
  "support_visibility": 1,
  "support_created_on": "2020-08-05 09:38:26",
  "support_updated_on": "2020-08-05 09:38:26",
  "transfer_id": null,
  "supporter_name": null,
  "support_coffee_price": "1.0000",
  "support_email": "*****@gmail.com",
  "is_refunded": null,
  "support_currency": "GBP",
  "support_note_pinned": 0,
  "referer": null,
  "country": "IN",
  "payer_email": "****@gmail.com",
  "payment_platform": "paypal",
  "payer_name": "Quip Fora"
}
```

### Extras
Get all your Extras purchases data, although write actions are not available at this moment.

#### Extra purchases `/v1/extras`
This endpoint provides data about all of your extra purchases.

**Parameters:** None

**cURL Request Format:**
```bash
curl https://developers.buymeacoffee.com/api/v1/extras \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -X GET
```

**Example Response:**
```json
{
  "current_page": 1,
  "data": [
    {
      "purchase_id": 30,
      "purchased_on": "2020-05-22 13:17:48",
      "purchase_updated_on": "2020-05-22 13:17:48",
      "purchase_is_revoked": 0,
      "purchase_amount": "8.00",
      "purchase_currency": "USD",
      "purchase_question": "What is your zoom id",
      "payer_email": "f783jksazx@privacy-mail.top",
      "payer_name": "",
      "total_paid_amount": "10.00",
      "extra": {
        "reward_id": 28,
        "reward_title": "Group Yoga on June 1st",
        "reward_description": "Join the 60-minute group yoga session where we practice Vinyasa. Beginner-friendly. ",
        "reward_confirmation_message": "Join using this Zoom link:&nbsp;https://us02web.zoom.us/j/89927509138Here is the link to the answer form:&nbsp;https://forms.gle/mjXCVrczAQV53UTD7Here is the link to the Make Me Laugh round:&nbsp;https://forms.gle/YX8wdLyVskiG74dbAThanks for playing!",
        "reward_question": "What is your zoom id?",
        "reward_used": 1,
        "reward_created_on": "2020-05-22 08:29:54",
        "reward_updated_on": "2020-05-22 08:29:54",
        "reward_deleted_on": null,
        "reward_is_active": 1,
        "reward_image": "https://cdn.buymeacoffee.com/uploads/project_updates/2020/05/5fdf77e7db86de743998100b29697265.jpg",
        "reward_slots": null,
        "reward_coffee_price": "0.00",
        "reward_order": 0
      }
    }
  ],
  "first_page_url": "https://developers.buymeacoffee.com/api/v1/extras?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "https://developers.buymeacoffee.com/api/v1/extras?page=1",
  "next_page_url": null,
  "path": "https://developers.buymeacoffee.com/api/v1/extras",
  "per_page": 5,
  "prev_page_url": null,
  "to": 4,
  "total": 4
}
```

#### Extra purchases by ID `/v1/extras/{id}`
This endpoint provides data about all of your extra purchases by its unique ID. Please note id is same as the purchase_id returned in the response.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ID | integer | The unique ID