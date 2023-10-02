import React from "react";
import Styled from "styled-components";
import Input from "../Input/Input";

const SocialContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap:15rem;
  margin:0 20rem;
`;

const SocialLink = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Flex = Styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = Styled.img`
  margin-right: 3.6rem;
  width: 4rem;
  height: 4rem;
  filter: saturate(0);
`;

const socialLinks = [
  {
    title: "github",
    placeholder: "github username",
    src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
  },
  {
    title: "dev.to ",
    placeholder: "dev.to username",
    src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png",
  },
  {
    title: "codesandbox",
    placeholder: "codesandbox username",
    src: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
  },
  {
    title: "linkedin",
    placeholder: "linkedin username",
    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    title: "facebook",
    placeholder: "facebook username",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
  },
  {
    title: "dribble",
    placeholder: "dribble username",
    src: "https://cdn-icons-png.flaticon.com/512/408/408743.png",
  },
  {
    title: "hashnode",
    placeholder: "hashnode username (with @)",
    src: "https://iconape.com/wp-content/png_logo_vector/cib-hashnode.png",
  },
  {
    title: "youtube",
    placeholder: "youtube channel name",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
  },
  {
    title: "hackerrank",
    placeholder: "hackerrank username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628233-3031053.png",
  },
  {
    title: "leetcode",
    placeholder: "leetcode username",
    src: "https://www.svgrepo.com/show/306328/leetcode.svg",
  },
  {
    title: "hackerearth",
    placeholder: "hackerearth username (with @)",
    src: "https://static-00.iconduck.com/assets.00/hackerearth-icon-444x512-0heomwse.png",
  },
  {
    title: "Discord",
    placeholder: "Discord invite (only code)",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
  {
    title: "twitter",
    placeholder: "twitter username",
    src: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
  },
  {
    title: "codepen",
    placeholder: "codepen username",
    src: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-codepen-4550862_121336.png",
  },
  {
    title: "stackoverflow",
    placeholder: "stackoverflow user ID",
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111690.png",
  },
  {
    title: "instagram",
    placeholder: "instagram username",
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
  },
  {
    title: "kaggle",
    placeholder: "kaggle username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-kaggle-3628281-3031974.png",
  },
  {
    title: "behance",
    placeholder: "behance username",
    src: "https://cdn-icons-png.flaticon.com/512/733/733594.png",
  },
  {
    title: "medium",
    placeholder: "medium username (with @)",
    src: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
  },
  {
    title: "codechef",
    placeholder: "codechef username",
    src: "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png",
  },
  {
    title: "codeforces",
    placeholder: "codeforces username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
  },
  {
    title: "topcoder",
    placeholder: "topcoder username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/topcoder-512.png",
  },
  {
    title: "GFG",
    placeholder: "GFG (<username>/profile)",
    src: "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png",
  },
  {
    title: "RSS",
    placeholder: "RSS feed URL",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
];

function Social({ socialData, onInputChange }) {
  return (
    <SocialContainer>
      {socialLinks.map((link, index) => (
        <SocialLink key={index}>
          <Flex>
            <IconImage src={link.src} />
            <Input
              width={"70%"}
              title={link.title}
              placeholder={link.placeholder}
              // value={
              //   (socialData.find((item) => item.title === link.title) || {})
              //     .value || ""
              // }
              value={
                socialData.find((item) => item.title === link.title)?.value ||
                ""
              }
              onChange={(value) => onInputChange(link.title, value)}
            />
          </Flex>
        </SocialLink>
      ))}
    </SocialContainer>
  );
}

export default Social;
