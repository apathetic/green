#!/usr/bin/env bash
set -e -m

TEMP_BRANCH='version-bump'
# npm config set //registry.npmjs.org/:_authToken ${NPM_API_KEY:?}
# check if current branch is clean
if [[ -n $(git diff --quiet; git status --short) ]]; then
  echo 'Your current working tree is not clean, exiting...'
  exit
fi
git checkout master --quiet && git pull --quiet


echo 'Select the new version:'
select v in 'patch' 'minor' 'major' 'other'; do
  case $v in
      patch ) SEMVER='patch'; break;;
      minor ) SEMVER='minor'; break;;
      major ) SEMVER='major'; break;;
      '  other (please specify)' )
        while true; do
          read -p 'Enter a specific version: ' SEMVER
          break;
        done
      break;;
  esac
done
echo ''
echo 'Here we go...'
echo ''


echo 'Testing code...'
npm run -s lint
npm run -s test:unit -- --silent
echo 'Done.'
echo ''


echo 'Bumping version...'
git checkout -b ${TEMP_BRANCH} --quiet # create a temporary branch for this
npm version ${SEMVER}
UI_VERSION=$(node -p "require('./package.json').version")
printf "GreenUI --> \e[1;5;32m${UI_VERSION}\e[0m\n"
echo 'Done.'
echo ''


# NOTE: no longer necessary, as `npm prepare` will run this
echo 'Building Framework...'
npm run -s build -- --silent
echo 'Done.'
echo ''


# TODO create nice message from git commits comprising this release:
# echo 'Parsing commits and generating release notes'
# LAST_GIT_TAG=$(git describe --tags --abbrev=0)
# CURRENT_GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
# COMMITS=$(git --no-pager log ${CURRENT_GIT_BRANCH}...${LAST_GIT_TAG} --pretty='format:%s|%h|%an|%ae')
# echo "${COMMITS//Merge*/\n$}"
# echo ${COMMITS//Merge*.com/} # anything starting w/ `Merge` until the EOL we filter out
# echo ${COMMITS} | sed -n -e '/Merge/,/\n/!p'


read -p 'Confirm Y/N ? ' -n 1 -r
echo ''
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Okay. Publishing GreenUI version ${UI_VERSION}"
  echo ''
  npm publish --access public # bombs away!
  git push -u origin ${TEMP_BRANCH} # create the version bump commit ?
else
  echo 'Aborting publish'
  git tag -d v${UI_VERSION}
fi
echo ''


# Clean up
git checkout master --quiet && git branch --delete ${TEMP_BRANCH} --quiet
echo ''
echo 'All done!'
