# Swisstronik Proxy Deployer

Independent Hardhat project for deploying and interacting with an upgradeable message contract on a configurable Swisstronik-compatible EVM network.

## Features

- UUPS upgradeable proxy
- OpenZeppelin upgrade tooling
- Configurable RPC URL and chain ID
- Deploy, read and write scripts
- Private key loaded only from `.env`

## Setup

```bash
npm install
cp .env.example .env
```

Fill in `PRIVATE_KEY` and, if needed, override the RPC URL/chain ID.

## Compile

```bash
npm run compile
```

## Deploy proxy

```bash
npm run deploy
```

Copy the printed proxy address into `PROXY_ADDRESS` in `.env`.

## Read / write

```bash
npm run read
MESSAGE="hello" npm run write
```

## Security

Never commit a real private key. `.env` and deployment-local files are ignored by Git.

---

## More from SamAlpha1

Before running unfamiliar GitHub or Web3 code, scan the account and its public repositories with **[GitHub Trust Auditor](https://samalpha1.github.io/GitHubTrustAuditor/)**.

Maintained by **[SamAlpha1](https://github.com/SamAlpha1)** · Follow **[@samalpha_ on X](https://x.com/samalpha_)**
