# Contributing

If you are reading this, you are awesome! Thank you for deciding to help with Melting-Pot. Whether it is a bug fix, a new feature or improvement to our docs. All contributions our welcome, but before you start here are a couple of key things to go by.

## Submitting a Pull Request

Pull requests are always greeted with happiness, but before opening a PR it is better to open an issue and discuss it with the team. We are very quick to respond and you’ll probably hear from us in a day (or two sometimes). If it’s a current issue that you want to work on, just leave a comment asking if you can take that issue. Sometimes an issue is already in progress of being fixed. This way, we can ensure that your precious time doesn’t get wasted.

Also as a guideline, always try to keep your PR as small as possible. Focus on one task at hand. One feature, one bug etc. If it’s more than one issue/feature it is better that you create multiple PRs for it rather then one.

As creating an issue or a pull request, please begin it with the following prefixes

- **`[Breaking]`** (For a change that will break the API)
- **`[Enhancement]`** (For when you add something that doesn’t break the API & adds more functionality to the current API)
- **`[Fix]`** (For when you fix something that previously didn’t function or appear correctly)

Leaving this prefix off will prevent your PR from being included in the release. A good case to omit the prefix is when proposing infrastructural changes to the repository that doesn’t break the API. .

## Branch Structure

At any given time `master` branch points to the latest development iteration of the library.

Hot fixes, new features, documentation anything related is handled on a separate branch. Once it’s been thoroughly tested out. It is then merged with the `master` branch.

## Getting Started

Please create a new branch from the latest `master` branch on your fork.

- Fork the Melting-Pot library from github
- Clone your fork to your local machine `git clone git@github.com:<yourname>/melting-pot.git`
- Create a new branch `git checkout -b [PREFIX]/my-topic-branch`
- Make your changes, test and then push your code to `git push origin [PREFIX]/my-topic-branch`
- Visit **GitHub** and make your pull request

If you have an existing local repository, please update it before you start. So that you can avoid or minimize the chances of getting merge conflicts

- `git remote add upstream http://github.com/withvoid/melting-pot.git`
- `git checkout master`
- `git pull upstream master`
- `git checkout -b my-topic-branch`
- Make your changes, test and then push your code to make the pull request

Here is another excellent guide called [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/)

## Running Locally

We have a **`dev-server`** build that uses code examples of `Melting-Pot`. To get started

```
$ yarn
$ yarn dev
```

## Testing the Documentation Site

The documentation site contains examples of all the components. To access the documentation site locally, run:

```js
$ yarn
$ yarn docz:dev
```

## Coding Style

Please use the coding style of `Melting-Pot`. There is linting in place, so if possible enable linting in your editor to get real time feedback.

We have a Git hook in place that will ensure that no bad linted or bad formatted code is pushed. So make sure that all the linting errors have been cleared out. You can run the below commands to automate your code linting fixes.

To reformat the code, run

```js
$ yarn lint:write
$ yarn prettier
```

## License

By contributing your code to Melting-Pot, you agree to licence your contribution under the MIT license.
