# Contributing to the BL.UK Design System
- [Branching strategy](#branching-strategy)
- [Adding a new feature](#adding-a-new-feature)
- [Committing](#committing)
    - [Atomic commits](#atomic-commits)


## Branching strategy
The BL.UK Design System repository is using a trunk-based development branching strategy. All changes are merged directly into `master`. To have control over publishing of packages, `npm publish` is triggered only when a new version tag is merged into `master`. Branches are still used for the peer review process. When required, separate branches are maintained for fixes.

It is important that there are no breaking changes added to `master`. All changes are backwards compatible. If there is an opportunity to improve the code resulting in a breaking change then this can be discussed in an issue.

## Adding a new feature
With the latest version of `master` it is possible to create the feature branch.

```
// get the latest code
git checkout master
git pull

// create a branch
git checkout -b feature/<name>
```

Make changes to the feature branch, `commit` and `push` to the remote repository. Open a PR and once approved `merge` into `master`.

## Committing
There is a strict policy around how code is committed to the repository to encourage good developer practices. These good practices have an impact on the review process and being able to produce automated release notes.

### Atomic commits
A set of changes are best suited to a single commit. It is useful to think about the review process and presenting a series of commits which tell a story about the overall change.

[One Commit. One Change.](https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf)