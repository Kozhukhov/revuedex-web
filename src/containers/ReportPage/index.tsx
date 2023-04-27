import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'store';
import { companySelector } from 'containers/Application/selectors';
import * as Styled from './styled';

const reviewsCount = 250;
const reviewsCompanies = ['g2crowd', 'capterra', 'gartner'];
const companyDescription =
  'PandaDoc empowers more than 50,000 customers to create, manage, e-Sign, and notarize all their documents with ease. We provide a digitized and centralized workflow platform that minimizes inefficiencies, which can lead to gains in productivity. Thanks to PandaDoc, you can focus on the important tasks at hand, rather than being bogged down with time-consuming busywork. For more information, including pricing and product features, visit us at www.pandadoc.com.';
const highestFeatures = [
  'E-Signature Integration - Proposal',
  'Online Document Creation - Proposal',
  'Engagement Tracking - Proposal',
];
const lowestFeatures = [
  'CRM Integration - Proposal',
  'API / Integrations - Proposal',
  'Rich Media - Proposal',
];
const competitors = [
  'DocuSign',
  'Juro',
  'Ironclad',
  'Concord',
  'Contractbook',
  'Icertis Suite',
  'ContractWorks',
  'Gatekeeper',
];
const insights = [
  {
    name: 'What do users dislike about product?',
    content: 'Users dislike the limited number of tools in the free version, the lack of customization options for documents, and the fact that emails sent through PandaDoc sometimes go to spam, making it difficult to track signer interactions. They also find it difficult to move data input boxes to the right spot in new templates and wish that PandaDoc had an easier solution to Salesforce CPQ out of the box.'
  },
  {
    name: 'What do users like most about product?',
    content: 'Users like most about PandaDoc is the ease of use and speed of use. The ability to store and find documents in one place and the automated reminders, which help save time, are also popular features. The integration with other platforms such as Salesforce and Monday.com, as well as the customizable templates, also make PandaDoc a great choice for many users.'
  },
  {
    name: 'What is the most valuable thing product has done for users?',
    content: "The most valuable thing that PandaDoc has done for users is streamline and facilitate the process of requesting signatures for contracts and other documents, saving time and money. It has also allowed users to close deals faster and keep their business running smoothly, as well as providing automated reminders to save time when contacting customers."
  },
  {
    name: 'What is users favorite feature of product?',
    content: "Users' favorite feature of PandaDoc is the ease of use and the ability to quickly and easily request signatures for contracts and other documents, as well as the automated reminders, which save time and reduce mistakes. The Smart Content feature also allows users to manage multiple versions of the same document in one template."
  },
  {
    name: 'What is users least favorite feature of product?',
    content: "Users least favorite feature of the product is likely the limited customization options and the potential for high pricing for those not using the free plan. Additionally, some users may find it difficult to move data input boxes to the right spot on new templates."
  },
  {
    name: 'What problems is product solving and how is that benefiting users?',
    content: "PandaDoc is solving the need for efficient and secure contract management and document signing, benefiting users by streamlining the process, providing customizable templates, and offering an intuitive user interface. It allows users to quickly and easily create, send, and sign documents, as well as track and store documents securely. It also provides features like automated reminders and the ability to suggest edits, making it an ideal solution for businesses"
  }
]

export const ReportPage = () => {
  const [companyLogoSrc, setCompanyLogoSrc] = useState('');

  const companyName = useSelector(companySelector);

  useEffect(() => {
    setCompanyLogoSrc(`https://logo.clearbit.com/${companyName}.com?size=110`);
  }, [companyName]);

  const onError = useCallback(() => {
    setCompanyLogoSrc('');
  }, []);

  return (
    <Styled.ReportPage>
      <Styled.TopPanel>The report was updated on 27-04-2023</Styled.TopPanel>
      <Styled.Page>
        <Styled.CompanyName>
          {companyLogoSrc && (
            <Styled.Logo src={companyLogoSrc} onError={onError} />
          )}
          <div>{companyName}</div>
        </Styled.CompanyName>
        <Styled.ReportName>Insightful Company Review Report</Styled.ReportName>
        <Styled.ReportDescription>
          Our review analysis tool has carefully analyzed the{' '}
          <b>{reviewsCount}</b> reviews from top sites, such as{' '}
          {reviewsCompanies.map((name) => (
            <b>{name + ', '}</b>
          ))}{' '}
          to provide you with valuable insights into your customers' needs and
          preferences
        </Styled.ReportDescription>
      </Styled.Page>
      <Styled.Page>
        <Styled.Block>
          <Styled.PageTitle>Company Description</Styled.PageTitle>
          <Styled.PageText>{companyDescription}</Styled.PageText>
        </Styled.Block>
        <Styled.TwoBlocks>
          <div>
            <Styled.PageTitle>Highest-Rated Features</Styled.PageTitle>
            {highestFeatures.map((name) => (
              <Styled.PageText>{name}</Styled.PageText>
            ))}
          </div>
          <div>
            <Styled.PageTitle>Lowest-Rated Features</Styled.PageTitle>
            {lowestFeatures.map((name) => (
              <Styled.PageText>{name}</Styled.PageText>
            ))}
          </div>
        </Styled.TwoBlocks>
        <Styled.Block>
          <Styled.PageTitle>Popular competitors</Styled.PageTitle>
          {competitors.map((name) => (
            <Styled.Competitor>
              {name}
              <Styled.SearchButton>Get insights</Styled.SearchButton>
            </Styled.Competitor>
          ))}
        </Styled.Block>
      </Styled.Page>
      <Styled.Page>
        {insights.map(({ name, content }) => <Styled.Block>
          <Styled.PageTitle>{name}</Styled.PageTitle>
          <Styled.PageText>{content}</Styled.PageText>
        </Styled.Block>)}
      </Styled.Page>
    </Styled.ReportPage>
  );
};
