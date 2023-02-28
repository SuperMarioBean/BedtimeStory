import { Injectable } from '@nestjs/common';

export const importDynamic = new Function(
  'modulePath',
  'return import(modulePath)',
);

@Injectable()
export class ConversationsService {
  chatGPTAPI: any;
  constructor() {}

  async makeConversation(text: string, options: any): Promise<string> {
    if (this.chatGPTAPI == null) {
      const { ChatGPTUnofficialProxyAPI } = await importDynamic('chatgpt');
      this.chatGPTAPI = new ChatGPTUnofficialProxyAPI({
        accessToken:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJkYXZpZC5mdS56anVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdlb2lwX2NvdW50cnkiOiJUVyJ9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItUERLaHU1U3FXTjJ4Wmgybm1IaDRYSTUwIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjcxOTk3Mzg3NDUwNjE3NDg5MyIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Nzc1NjQ3NzcsImV4cCI6MTY3ODc3NDM3NywiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.yPzqohdCfmhlqKRT6XHdvoYgtg8pll7R5ROMSNu5rJ4WXrUln0t9Jpl34VU5-is401ALLkalB4zpaUWJc6yEfIMT0PAmCKPcF4ap3HeFrtni6XidKFLSUzZx2EDrrQ4OHKiIWR5_-5qCh2JjlP-3eltqRduhAtaZ_Q0-izUA3qakXKIl-0ZQ-lNegyy29cXC-o99GMSCjFsc8hDWpfmHNhwBwbim1t7pIv-I2C2YjenZTy-ibIarONZMr2sMsx9CpNBgxp9CRS7WcWqmyBGBUtQvX22FUGXqKB-bnq7Q6Eg9Fdz7ZZTt68xuvv4vMtEnTk7xRIHi2wgIHiaK29_7GQ',
        //apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',
        debug: true,
      });
    }

    return this.chatGPTAPI.sendMessage('你好啊', options).then((e) => {
      e.text;
    });
  }
}
