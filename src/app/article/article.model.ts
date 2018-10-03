export class Article {
  title: string;
  link: string;
  votes: number;
  constructor(title, link, votes?) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp() {
    this.votes++;
  }
  voteDown() {
    this.votes = this.votes <= 1 ? 0 : --this.votes;
  }
  domain(): string {
    try {
      const url = this.link.split('://')[1];
      return url.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}
