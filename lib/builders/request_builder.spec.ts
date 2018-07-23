import { RequestBuilderImpl } from './request_builder';

describe('RequestBuilderImpl', () => {
  describe('isAnyVerb', () => {
    it('should json stringify to { method: "ANY" }', () => {
      const builder = new RequestBuilderImpl().isAnyVerb;
      const expectedJSON = JSON.stringify({ method: 'ANY' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAnyVerb).toEqual(builder);
    });
  });

  describe('isADelete', () => {
    it('should json stringify to { method: "DELETE" }', () => {
      const builder = new RequestBuilderImpl().isADelete;
      const expectedJSON = JSON.stringify({ method: 'DELETE' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isADelete).toEqual(builder);
    });
  });

  describe('isAGet', () => {
    it('should json stringify to { method: "GET" }', () => {
      const builder = new RequestBuilderImpl().isAGet;
      const expectedJSON = JSON.stringify({ method: 'GET' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAGet).toEqual(builder);
    });
  });

  describe('isAHead', () => {
    it('should json stringify to { method: "HEAD" }', () => {
      const builder = new RequestBuilderImpl().isAHead;
      const expectedJSON = JSON.stringify({ method: 'HEAD' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAHead).toEqual(builder);
    });
  });

  describe('isAnOptions', () => {
    it('should json stringify to { method: "Options" }', () => {
      const builder = new RequestBuilderImpl().isAnOptions;
      const expectedJSON = JSON.stringify({ method: 'OPTIONS' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAnOptions).toEqual(builder);
    });
  });

  describe('isAPost', () => {
    it('should json stringify to { method: "POST" }', () => {
      const builder = new RequestBuilderImpl().isAPost;
      const expectedJSON = JSON.stringify({ method: 'POST' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAPost).toEqual(builder);
    });
  });

  describe('isAPut', () => {
    it('should json stringify to { method: "PUT" }', () => {
      const builder = new RequestBuilderImpl().isAPut;
      const expectedJSON = JSON.stringify({ method: 'PUT' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isAPut).toEqual(builder);
    });
  });

  describe('isATrace', () => {
    it('should json stringify to { method: "TRACE" }', () => {
      const builder = new RequestBuilderImpl().isATrace;
      const expectedJSON = JSON.stringify({ method: 'TRACE' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.isATrace).toEqual(builder);
    });
  });

  describe('withBasicAuth', () => {
    it('should json stringify to { basicAuth: { username: value, password: value } }', () => {
      const builder = new RequestBuilderImpl();
      builder.withBasicAuth('ike', '1234');
      const expectedJSON = JSON.stringify({ basicAuthCredentials: { username: 'ike', password: '1234' } });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });

    it('returns self for chaining', () => {
      const builder = new RequestBuilderImpl();
      expect(builder.withBasicAuth('', '')).toEqual(builder);
    });
  });

  describe('withBody', () => {
    it('should json stringify to { bodyPatterns: [{{ JSON GENERATED BY MATCH BUILDER }}] }', () => {
      const builder = new RequestBuilderImpl().withBody.absent;
      const expectedJSON = JSON.stringify({ bodyPatterns: [{ absent: true }] });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });

  describe('withCookie', () => {
    it('should json stringify to { cookies: { key: {{ JSON GENERATED BY MATCH BUILDER }} } }', () => {
      const builder = new RequestBuilderImpl().withCookie('ike').absent;
      const expectedJSON = JSON.stringify({ cookies: { ike: { absent: true } } });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });

  describe('withHeader', () => {
    it('should json stringify to { headers: { key: {{ JSON GENERATED BY MATCH BUILDER }} } }', () => {
      const builder = new RequestBuilderImpl().withHeader('ike').absent;
      const expectedJSON = JSON.stringify({ headers: { ike: { absent: true } } });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });

  describe('withQueryParam', () => {
    it('should json stringify to { queryParameters: { key: {{ JSON GENERATED BY MATCH BUILDER }} } }', () => {
      const builder = new RequestBuilderImpl().withQueryParam('ike').absent;
      const expectedJSON = JSON.stringify({ queryParameters: { ike: { absent: true } } });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });

  describe('withUrl', () => {
    it('should json stringify to {{ JSON GENERATED BY URL MATCH BUILDER }}', () => {
      const builder = new RequestBuilderImpl().withUrl.equalTo('ike');
      const expectedJSON = JSON.stringify({ url: 'ike' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });

  describe('withUrlPath', () => {
    it('should json stringify to {{ JSON GENERATED BY URL MATCH BUILDER }}', () => {
      const builder = new RequestBuilderImpl().withUrlPath.equalTo('ike');
      const expectedJSON = JSON.stringify({ urlPath: 'ike' });
      expect(JSON.stringify(builder)).toEqual(expectedJSON);
    });
  });
});