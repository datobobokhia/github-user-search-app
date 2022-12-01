import { StyledUserInfo } from "../../styles/UserInfo.styled";
import { StyledUserInfoHeader } from "../../styles/UserInfo.styled";
import { StyledUserInfoHeaderName } from "../../styles/UserInfo.styled";
import { StyledUserInfoQuantities } from "../../styles/UserInfo.styled";
import { StyledUserInfoInnerContent } from "../../styles/UserInfo.styled";
import { StyledUserSocialActivity } from "../../styles/UserInfo.styled";

export default function UserInfo({ dataResponse, darkMode }) {
  return (
    <StyledUserInfo darkMode={darkMode}>
      <StyledUserInfoInnerContent>
        <StyledUserInfoHeader>
          <img src={dataResponse.data.avatar_url} alt="user avatar" />
          <StyledUserInfoHeaderName darkMode={darkMode}>
            <h2>{dataResponse.data.name}</h2>
            <h5>@{dataResponse.data.login}</h5>
            <h3>Joined {dataResponse.data.created_at}</h3>
          </StyledUserInfoHeaderName>
        </StyledUserInfoHeader>
        <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
          {dataResponse.data.bio}
        </p>
        <StyledUserInfoQuantities darkMode={darkMode}>
          <p>Repos</p>
          <p>Followers</p>
          <p>Following</p>
          <h3>{dataResponse.data.public_repos}</h3>
          <h3>{dataResponse.data.followers}</h3>
          <h3>{dataResponse.data.following}</h3>
        </StyledUserInfoQuantities>
        <StyledUserSocialActivity>
          <div>
            <img
              src="assets/photo/icon-location.svg"
              alt="location-icon"
              style={{ width: "14px", marginRight: "6px" }}
            />

            {dataResponse.data.location ? (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                {dataResponse.data.location}
              </p>
            ) : (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                Not Available
              </p>
            )}
          </div>

          <div>
            <img src="assets/photo/icon-website.svg" alt="website-icon" />
            <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
              {dataResponse.data.html_url}
            </p>
          </div>

          <div>
            <img src="assets/photo/icon-twitter.svg" alt="twitter-icon" />
            {dataResponse.data.twitter_username ? (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                {dataResponse.data.twitter_username}
              </p>
            ) : (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                Not Available
              </p>
            )}
          </div>

          <div>
            <img src="assets/photo/icon-company.svg" alt="company-icon" />
            {dataResponse.data.company ? (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                {dataResponse.data.company}
              </p>
            ) : (
              <p style={darkMode ? { color: "#ffffff" } : { color: "#4B6A9B" }}>
                Not Available
              </p>
            )}
          </div>
        </StyledUserSocialActivity>
      </StyledUserInfoInnerContent>
    </StyledUserInfo>
  );
}
