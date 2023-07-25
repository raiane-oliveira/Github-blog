import { RiGithubFill, RiShareBoxLine } from 'react-icons/ri'
import { BsFillBuildingFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

import {
  ProfileAvatar,
  ProfileContainer,
  ProfileInformation,
  SocialMediaContainer,
  TitleContainer,
} from './styles'
import { useBlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const { user } = useBlogContext()

  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={user.avatar_url} alt={user.name} aria-hidden />
      </ProfileAvatar>

      <ProfileInformation>
        <TitleContainer>
          <h1>{user.name}</h1>
          <a target="_blank" href={user.html_url} rel="noreferrer">
            Github
            <RiShareBoxLine />
          </a>
        </TitleContainer>

        <p>{user.bio}</p>

        <SocialMediaContainer>
          <span>
            <RiGithubFill />
            {user.login}
          </span>

          {user.company && (
            <span>
              <BsFillBuildingFill />
              {user.company}
            </span>
          )}

          <span>
            <FaUserFriends />
            {user.followers} seguidores
          </span>
        </SocialMediaContainer>
      </ProfileInformation>
    </ProfileContainer>
  )
}
