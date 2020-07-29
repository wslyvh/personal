---
title: Clean Contracts - a guide on smart contract patterns & practices
date: 2020-07-30
description: Blockchain and smart contract development require solid engineering practices, rigorous testing and a strong security mindset. This guide covers several patterns, practices, and principles to reduce the risks associated with it. 
---


Blockchain and smart contract development are still relatively new and highly experimental. They require a different engineering mindset than traditional web, or app development where ‘move fast and break things’ has become the norm. 

Blockchain development is much more like hardware, or financial service development. Smart contracts are complex instruments that offer the possibility to have self-enforcing contracts including transparent, tamper-proof and immutable information. They have the authority to allocate high-value resources between complex systems. Often working autonomously. With huge financial loss at risk. This makes smart contracts critical components in these systems. Development of such components require more investment, design and effort upfront. Solid engineering practices, rigorous testing and a strong security mindset. 

In a series of blog posts, I’m planning to go through several patterns, practices, and principles that can be applied to blockchain and smart contract development to reduce the risks associated with it. 


# Clean Code 

In this first article I’ll cover more general engineering practices based on the concepts of Clean Code. Clean code is a well-known concept within the software development industry. [Robert C Martin, also known as 'Uncle Bob' wrote the famous handbook](https://amzn.to/30RsoKk). Its principles go back to even the earlier concepts of the Agile manifesto and software craftsmanship. It’s a knowledge base for the way we think, write, and read code. Build on decades of wisdom in software development. 

> *“Truth can only be found in one place: the code“* - Robert C. Martin 

Clean code is code that is easy to read. Easy to understand. And easy to maintain. Clean code is an attempt to make sense of the complexity of systems that we’re dealing with. It’s a defense mechanism that can provide guidance when you’re not sure how a change would affect the codebase. Principles that are mandatory for designing and writing secure, open and immutable code, such as smart contracts.

# Practices

## Naming
The naming of contracts, functions or variables should reveal the intention, why it exists and how it is used. If a name requires comments to explain, then it doesn’t reveal its intent. 

Be consistent in your naming throughout your code. Especially when you’re working with a large code base. Use the same names for abstract concepts, throughout multiple contracts. 

Use pronounceable names. 

Use searchable names.

**Reference**: [Solidity Style guide](https://solidity.readthedocs.io/en/latest/style-guide.html)


## Structure & ordering 

Ordering helps readers identify which functions they can call and to find the constructor and fallback definitions easier.

### Ordering of Functions 

Functions should be grouped according to their visibility and ordered:

1. constructor
1. receive function (if exists)
1. fallback function (if exists)
1. external
1. public
1. internal
1. private

Explicitly label the visibility of functions and state variables. Functions can be specified as being `external`, `public`, `internal` or `private`. Please understand the differences between them.

### Ordering of Modifiers

The modifier order for a function should be:

1. Visibility
1. Mutability
1. Virtual
1. Override
1. Custom modifiers

### Order of Layout 

Layout contract elements in the following order:

1. Pragma statements
1. Import statements
1. Interfaces
1. Libraries
1. Contracts

Inside each contract, library or interface, use the following order:

1. Type declarations
1. State variables
1. Events
1. Functions

**Reference**: [Solidity Style guide](https://solidity.readthedocs.io/en/latest/style-guide.html)


## Documentation & Natspec 

Solidity contracts can have a form of comments that provide rich documentation to others reading the code as well as end-users. This is called the Ethereum Natural Language Specification Format, or [NatSpec](https://solidity.readthedocs.io/en/latest/natspec-format.html).

This documentation is segmented into developer-focused messages and end-user-facing messages. These messages may be shown to the end user (the human) at the time that they will interact with the contract (i.e. sign a transaction).

It is recommended that Solidity contracts are fully annotated using NatSpec for all public interfaces (everything in the ABI).

**Reference** [NatSpec](https://solidity.readthedocs.io/en/latest/natspec-format.html)


## Formatting 

Reading code should be like reading this blog, an article or a book. It should be well formatted. The Solidity style guide provides guidance for writing Solidity code. The goal for it is not to be the right or only way, but to be consistent. 

**Reference**: [Solidity Style guide](https://solidity.readthedocs.io/en/latest/style-guide.html)

Consistency can be enforced by using a linter. This not only provides formatting and style guide validation, but also includes security validation.

Linters for Solidity
- [Ethlint](https://github.com/duaraghav8/Ethlint) (formerly Solium)
- [Solhint](https://github.com/protofire/solhint) 
- [VS Code Solidity](https://github.com/juanfranblanco/vscode-solidity/)

Use a regular linter for your dapp development (e.g. eslint, depending on your language).


## Contracts & Data structures 

- Contracts (or Contracts) expose behavior and hide data. This makes it easy to add new kinds of objects without changing existing behaviors. It also makes it hard to add new behaviors to existing objects.

- Data structures expose data and have no significant behavior. This makes it easy to add new behaviors to existing data structures but makes it hard to add new data structures to existing functions.

Clear separation of the two are important, due to the contract’s immutability. If you want to add logic, or deploy new contracts, you want to be able to utilize the existing data structures. Separating the two can be done by storage contracts. We’ll cover these in more details in another blog post. 


## Standards & Libraries 

An intrinsic feature of smart contracts are its composability. Turning every contract into a component and potential building block that others can leverage. A lot of these building blocks exists already and standards ensure the ease of use and development. The most well known standard was created for the emerging token ecosystem and the exchanges serving it: the ERC20 standard.

Before you dive in and start writing your own, custom smart contracts, it’s wise to check if any standards, or open-source components exist. If such standard contracts exists, and are properly tested and audited, they can minimise the risk in your programs.

- Ethereum Improvement Proposals (EIPs) describe standards for the Ethereum platform, including contract standards. [Finalized ERC's](https://eips.ethereum.org/erc#final)
- [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)


## Error handling 

Exceptions are a crucial part of modern software engineering. They require special treatment and can be extremely powerful. Instead of fighting them we should try to leverage them, as unhandled exception may cause unexpected behavior. 

When an exception is thrown in Solidity code, all state changes are rolled back and further execution is halted. Luckily, exception handling is built into Solidity (since 0.6). This is only available for external calls. 

Provide enough context with your exception to determine the source and cause of your error. 

Try to write test that throw these exceptions.

Don’t return null. Don’t pass null to functions.

Guard Checks can help that the behavior of a smart contract and its input parameters are as expected. More to follow in another blog post.

Use `assert()`, `require()`, `revert()` properly. **assert** should be used to test for internal errors, and check invariants.
**require** should be used to test that inputs, contract state variables, or return values from external contracts are valid. 

If a transaction doesn’t have enough gas to execute, the out of gas error is not caught.


## Testing 

The same rules for clean code, apply to testing. Clean tests are test that are easy to read. Easy to understand. And easy to maintain. Tests help you keep your code flexible, maintainable, and reusable. They validate the behaviors, reduce the risks of making unintended changes and save time debugging and writing your code. 

### F.I.R.S.T

- **Fast** — Test should fast enough, so that you want to run them frequently. It should help speed up your development process, not hinder it
- **Independent** — Tests should be independent of each other and able to run in any order
- **Repeatable** — Tests should be repeatable in any environment
- **Self validating** — Tests should a clear (boolean) output if it passes. 
- **Timely** — Tests need to be written in a timely fashion. Just before the production code. 

### AAA

The AAA (Arrange-Act-Assert) pattern is one of the most common standards in software testing. It suggest to divide your tests in the corresponding sections: arrange, act and assert. Each one of them is responsible for the part in which they are named after.

- **Arrange** - The code required to set-up your test
- **Act** - Invocation of the method being tested
- **Assert** - Check whether the expectations are met

Use only one assert per test.

### Separation of tests 

- **Unit tests** determine whether an individual unit of source-code is fit for use. This is typically a single function, tested with different parameters to ensure it returns the expected values.
- **Integration tests** determine if independently developed units of software work correctly when they are connected to each other. For smart contract this means interactions between different components of a single contract, or across multiple contracts.

### Test coverage 

Writing good tests to ensure your app is working as intended is not enough. If you're not measuring anything, it's hard to say exactly how much of your code is being tested. Test coverage (or code coverage) is a useful tool for finding untested parts of a codebase. 

There is much debate over how much should be covered. Just your best judgement, but aim for as high as possible. Untested code could do anything and result in unexpected behavior.

### Tools 

- [Buidler](https://buidler.dev/) -  A task runner for Ethereum smart contract developers that allows you to deploy your contracts, run your tests and debug your code
- [OpenZeppelin Test environment](https://docs.openzeppelin.com/test-environment/) - Test Environment is a smart contract testing library: it provides utilities that help you write tests, but it doesn’t run your tests for you. Works with Mocha 
- [Brownie](https://github.com/eth-brownie/brownie) - A Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine
- [Truffle](https://www.trufflesuite.com/truffle) - A development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)
- [Ganache](https://www.trufflesuite.com/ganache) - A personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests
- [Solidity-coverage](https://github.com/sc-forks/solidity-coverage) (formerly Solcover) - Code coverage for Solidity smart-contracts


## Contracts 

Contracts should remain small ('KISS'). Complexity increases the likelihood of errors and unexpected behavior. They shoud have one responsbility - one reason to change, supporting the Single Responsibility Principle. It's one of the most important concepts in OO design.

Modularize your contracts to keep them small and utilize existing standards & libraries (see chapter above).

The same applies to functions. Functions should do one thing. They should do it well. They should do it only.

- Function bodies should be short — no longer than 20 lines and mostly less than 10 lines
- Functions should take as few arguments as possible, preferably none

> *"The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that."* - Robert C. Martin 

On blockchain everything is public. Even private data in smart contracts can be viewed by anyone Keep this in mind when designing your programs.

Only use blockchain and smart contracts for the parts that need to be decentralized. 


## Security tools & code analysis 

tbd 


## Further Reading 

- [Clean Code](https://amzn.to/30RsoKk), Robert C. Martin
- [Solidity Patterns](https://fravoll.github.io/solidity-patterns/), Fravoll 
- [Ethereum Smart Contract Best Practices](https://consensys.github.io/smart-contract-best-practices), ConsenSys
- [Best Practices for Smart Contract Development](https://yos.io/2019/11/10/smart-contract-development-best-practices/), Yos Riady