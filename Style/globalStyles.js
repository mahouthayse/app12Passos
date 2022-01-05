import styled from "styled-components/native";
import colors from "./colors";

export const ViewPrimary = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 20px;
  height: 100%;
`;

export const BlueView = styled(ViewPrimary)`
  background-color: ${colors.surface};
`;

export const TitleManuscript = styled.Text`
  font-family: dancing_script_bold;
  font-size: 28px;
  color: ${colors.primary};
  line-height: 29px;
  margin-bottom:16px;
`;

export const TitlePrimary = styled.Text`
  font-family: bebas_regular;
  font-size: 28px;
  color: ${colors.title};
  line-height: 29px;
  margin-bottom:10px;
`;

export const TextPrimary = styled.Text`
  font-family: montserrat_medium;
  font-size: 14px;
  color: ${colors.text};
  line-height: 22px;
  margin-bottom:8px;
`;

export const WhiteText = styled(TextPrimary)`
  font-family: montserrat_bold;
  color: ${colors.white};
`;

export const BlackText = styled(WhiteText)`
  color: ${colors.title};
`;



