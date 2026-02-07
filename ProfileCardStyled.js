import styled from "styled-components";
import avatar from "./image/avatar.webp";

 const CardContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
`;
 const CardHeader = styled.div`
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 30px 25px 25px;
  text-align: center;
`;

const Name = styled.h2`
  margin: 0 0 5px 0;
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  letter-spacing: -0.5px;
`;


 const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  padding: 20px 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;
 const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StatNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Bio = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
  margin: 0 0 20px 0;
`;

 const Actions = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 25px 25px;
  justify-content: center;
`;

const BaseButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid rgba(102, 126, 234, 0.35);
    outline-offset: 2px;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  &:hover {
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
`;

 const SecondaryButton = styled(BaseButton)`
  background: #667eea;
  color: white;

  &:hover {
    background: #5a67d8;
  }
`;
  
  function ProfileCard() {
    return (
      <CardContainer>
        <CardHeader>
          <ProfileImage>
            <img src={avatar} alt="profile" />
          </ProfileImage>
        </CardHeader>
  
        <CardBody>
          <Name>Alex Johnson</Name>
  
          <Stats>
            <Stat>
              <StatNumber>899</StatNumber>
              <StatLabel>Following</StatLabel>
            </Stat>
  
            <Stat>
              <StatNumber>999</StatNumber>
              <StatLabel>Followers</StatLabel>
            </Stat>
  
            <Stat>
              <StatNumber>9289</StatNumber>
              <StatLabel>Likes</StatLabel>
            </Stat>
          </Stats>
  
          <Bio>
            Passionate about creating beautiful, user-friendly web experiences.
            Love working with React, TypeScript, and modern web technologies.
          </Bio>
  
          <Actions>
            <PrimaryButton>Follow</PrimaryButton>
            <SecondaryButton>Message</SecondaryButton>
          </Actions>
        </CardBody>
      </CardContainer>
    );
  }
  
  export default ProfileCard;
