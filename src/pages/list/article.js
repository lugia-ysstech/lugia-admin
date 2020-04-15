/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from 'react';

import Content from '../../components/content';
import PageContent from '../../components/page-content';
import ListHeader from '../../components/list/listHeader';
import Article from '../../components/personal/article';
import article from '../../models/list/article';
import { connect } from '@lugia/lugiax';

class ListArticle extends Component {
  constructor(props) {
    super(props);
    const { getArticleInfo } = props;
    getArticleInfo();
  }

  render() {
    const { articleInfo } = this.props;
    return (
      <Content>
        <ListHeader activityValue={'article'} />
        <PageContent>
          <Article data={articleInfo.data} />
        </PageContent>
      </Content>
    );
  }
}

const ArticlePage = connect(
  article,
  state => {
    return {
      articleInfo: state.get('articleInfo').toJS
        ? state.get('articleInfo').toJS()
        : state.get('articleInfo'),
    };
  },
  mutations => {
    return {
      getArticleInfo: mutations.asyncGetArticleInfo,
    };
  }
)(ListArticle);

export default () => {
  return <ArticlePage />;
};
