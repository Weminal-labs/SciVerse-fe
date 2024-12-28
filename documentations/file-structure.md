# Project Structure

```
.
├── components.json
├── documentations
│   ├── app-flow.md
│   ├── file-structure.md
│   ├── frontend-guidelines.md
│   ├── ipfs.md
│   └── tech-stack.md
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── public
│   └── arbitrum.svg
├── README.md
├── resources-doc
│   └── sciverse.jpg
├── src
│   ├── abi
│   │   ├── contractAddress.json
│   │   ├── DeSciHub.json
│   │   ├── DeSciStaking.json
│   │   ├── DeSciToken.json
│   │   ├── MembershipNFT.json
│   │   └── MetadataRegistry.json
│   ├── app
│   │   ├── dao
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   ├── read
│   │   │   └── page.tsx
│   │   ├── research
│   │   │   └── page.tsx
│   │   └── write
│   │       └── page.tsx
│   ├── components
│   │   ├── dao
│   │   │   ├── CreateDAOModal.tsx
│   │   │   ├── DAODetailsModal.tsx
│   │   │   ├── DAOList.tsx
│   │   │   ├── JoinDAOModal.tsx
│   │   │   └── LeaveDAOModal.tsx
│   │   ├── dashboard
│   │   │   ├── ActiveDAOs.tsx
│   │   │   ├── OverviewStats.tsx
│   │   │   ├── RecentProposals.tsx
│   │   │   └── UserStatus.tsx
│   │   ├── profile
│   │   │   ├── DAOMemberships.tsx
│   │   │   ├── RoleChangeHistory.tsx
│   │   │   ├── RoleChangeModal.tsx
│   │   │   ├── RoleInformation.tsx
│   │   │   ├── StakeAndRewards.tsx
│   │   │   ├── UpdateProfileModal.tsx
│   │   │   └── UserActivity.tsx
│   │   ├── research
│   │   │   ├── CreateProposalModal.tsx
│   │   │   ├── FilterSearch.tsx
│   │   │   ├── FundProposalModal.tsx
│   │   │   ├── InvestorDashboard.tsx
│   │   │   ├── ProposalList.tsx
│   │   │   ├── ResearcherDashboard.tsx
│   │   │   ├── ReviewerDashboard.tsx
│   │   │   ├── ReviewProposalModal.tsx
│   │   │   └── ViewProposalModal.tsx
│   │   ├── shared
│   │   │   └── Navbar.tsx
│   │   └── ui
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── select.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       └── textarea.tsx
│   ├── constants
│   │   ├── abi.ts
│   │   └── index.ts
│   ├── containers
│   │   ├── home
│   │   │   └── Profile.tsx
│   │   ├── read
│   │   │   └── ReadContract.tsx
│   │   └── write
│   │       └── WriteContract.tsx
│   ├── hooks
│   │   └── useRole.ts
│   ├── lib
│   │   └── utils.ts
│   ├── providers
│   │   ├── Layout.tsx
│   │   └── Web3Provider.tsx
│   ├── types
│   │   └── env.d.ts
│   └── utils
│       ├── arbitrumStylus.ts
│       └── config.ts
├── tailwind.config.ts
└── tsconfig.json

29 directories, 81 files
```