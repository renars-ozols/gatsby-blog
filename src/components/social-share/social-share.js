import React from 'react'
import PropTypes from 'prop-types'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share'

const SocialShare = ({socialConfig, tags}) => (
    <div>
        <FacebookShareButton url={socialConfig.config.url}>
            <FacebookIcon size={40} borderRadius={3}/>
        </FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
            <TwitterIcon size={40} borderRadius={3}/>
        </TwitterShareButton>
        <PinterestShareButton url={socialConfig.config.url} media={socialConfig.config.image}>
            <PinterestIcon size={40} borderRadius={3}/>        
        </PinterestShareButton>
    </div>
)

SocialShare.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
SocialShare.defaultProps = {
	tags: [],
};

export default SocialShare