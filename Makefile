GITHUB_REPO_ARCHIVE=https://github.com/Colorsublime/Colorsublime-Themes/archive/master.zip

build:
	# fetching themes
	@ rm -rf _themes/*
	@ mkdir -p tmp
	@ curl -LOks $(GITHUB_REPO_ARCHIVE)
	@ unzip -o master.zip -d tmp
	@ node build
	@ cp tmp/Colorsublime-Themes-master/themes/*.tmTheme ace/tool/tmthemes
	# generate ace files
	@ cd ace/tool && \
		npm install && \
		node tmtheme.js && \
		cd ../ && \
		npm install && \
		node ./Makefile.dryice.js -m
	@ make clean-tmp

deploy:
	@ git subtree push --prefix _site origin gh-pages

serve:
	@ jekyll serve

clean-tmp:
	@ rm -rf tmp master.zip

clean: clean-tmp
	@ jekyll clean


.PHONY: build serve clean-tmp deploy