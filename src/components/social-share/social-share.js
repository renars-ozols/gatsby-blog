import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../heading/heading'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share'

import {Wrapper} from './social-share.styles'

const SocialShare = ({socialConfig, tags}) => (
    <>
        <Heading h4 center>Share:</Heading>
        <Wrapper>
            <FacebookShareButton url={socialConfig.config.url}>
                <FacebookIcon size={40} borderRadius={3}/>
            </FacebookShareButton>
            <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
                <TwitterIcon size={40} borderRadius={3}/>
            </TwitterShareButton>
            <PinterestShareButton url={socialConfig.config.url} media={socialConfig.config.image} description={socialConfig.config.description}>
                <PinterestIcon size={40} borderRadius={3}/>        
            </PinterestShareButton>
        </Wrapper>
    </>
)

SocialShare.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string,
            description: PropTypes.string
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
SocialShare.defaultProps = {
	tags: [],
};

export default SocialShare