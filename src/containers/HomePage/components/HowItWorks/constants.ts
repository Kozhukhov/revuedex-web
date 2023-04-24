import searchIcon from './images/search.png';
import analyzeIcon from './images/analyze.png';
import reportIcon from './images/report.png';

export const StepsConfig = [
  {
    id: 'search',
    title: 'Searching',
    content:
      'Simply provide us with your legal company name. Once we have verified your company name, we will begin collecting reviews from top sites such as g2crowd, capterra, gartner, and other platforms.',
    image: searchIcon,
  },
  {
    id: 'analyze',
    title: 'Analyze',
    content:
      'We will carefully analyze the reviews, looking for common themes and key insights that can help you make informed decisions.',
    image: analyzeIcon,
  },
  {
    id: 'report',
    title: 'Report creation',
    content:
      'Finally, we will compile all our findings into a comprehensive report that highlights the main points, trends, and sentiments expressed by your customers.',
    image: reportIcon,
  },
];
