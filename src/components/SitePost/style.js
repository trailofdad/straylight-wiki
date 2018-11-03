import styled, { css } from 'react-emotion'
import { colors } from '../../layouts/theme'

export const ArticlesWrap = styled('div')`
  padding-bottom: 40px;
`

export const PageHeader = styled('div')`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.gray800};
  word-break: break-word;

  h1 {
    color: ${colors.gray600};
    margin-bottom: 15px;
  }

  small {
    font-size: 0.75rem;
  }

  time {
    font-size: 0.75rem !default;
    color: ${colors.gray500};
    display: inline;
    margin-right: 10px;
  }

  .author {
    text-transform: uppercase;
    margin-right: 10px;
    color: ${colors.gray600};
  }

  .author-image {
    max-width: 24px;
    border-radius: 20px;
    float: left;
    margin: 0 10px 5px 0;
    display: block;
  }
`

export const PageContent = styled('div')`
  padding-bottom: 10px;

  h2 {
    padding: 10px 0;
  }

  p,
  ul,
  ol {
    margin: 30px 0;
    padding: 0;
    color: ${colors.gray400};

    li {
      margin: 1rem 0;
      color: ${colors.gray400};
    }

    &:first-child:last-child {
      margin: 0;
    }
  }

  strong {
    color: white;
  }

  ol {
    list-style: none;
    counter-reset: item;

    li {
      counter-increment: item;
      position: relative;

      &:before {
        content: counter(item);
        background: ${colors.champagne};
        color: ${colors.gray900};
        padding: 8px;
        position: absolute;
        left: -2.2rem;
        top: 4px;
        bottom: 4px;
        font-size: 0.8rem;
      }
    }
  }

  blockquote {
    background-color: ${colors.gray100};
    border-left: 5px solid ${colors.gray200};
    padding: 0.25em 1.5em;

    a {
      display: block;
      word-break: break-word;
    }
  }
`

export const Articles = styled('div')``

export const Title = styled('div')``

export const linkStyle = css`
  box-shadow: none;
`
