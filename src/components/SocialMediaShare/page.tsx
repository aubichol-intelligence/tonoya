"use client"

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
    FacebookShareButton,
    TwitterShareButton,
    // LinkedinShareButton,
    WhatsappShareButton,
    // EmailShareButton,
    FacebookIcon,
    // TwitterIcon,
    // LinkedinIcon,
    WhatsappIcon,
    // EmailIcon,
} from "react-share";

interface SocialMediaShareProps {
    url: string;
    title: string;
}

const SocialMediaShare: React.FC<SocialMediaShareProps> = ({ url, title }) => {


    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {/* <FacebookShareButton url={url} quote={title}> */}
            <FacebookShareButton url={url} hashtag="#padMachine #bd">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                {/* <TwitterIcon size={32} round /> */}
                <FaXTwitter size={25} />
            </TwitterShareButton>
            {/* <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton> */}
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            {/* <EmailShareButton url={url} subject={title}>
                <EmailIcon size={32} round />
            </EmailShareButton> */}
        </div>
    );
};

export default SocialMediaShare;
