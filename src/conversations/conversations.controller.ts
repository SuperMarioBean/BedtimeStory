import { Controller, Post } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ConversationsService } from './conversations.service';
import { ChatMessage } from 'chatgpt';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Post('make')
  async makeConversation(text: string): Promise<string> {
    return this.conversationsService.makeConversation(text, {
      timeoutMs: 1000 * 60 * 2,
    });
  }
}
