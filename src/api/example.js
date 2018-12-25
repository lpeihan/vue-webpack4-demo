import request from '@/utils/request';

export function getExample(params = {}) {
  return request({
    url: '/example',
    method: 'get',
    params
  });
}
