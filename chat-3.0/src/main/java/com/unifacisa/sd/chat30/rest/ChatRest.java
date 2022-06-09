package com.unifacisa.sd.chat30.rest;

import com.unifacisa.sd.chat30.models.Mensagem;
import com.unifacisa.sd.chat30.service.ChatService;

public class ChatRest {

    private ChatService chatService;

    public void saveChat(Mensagem mensagem) {
        chatService.salvarMensagem(mensagem);
    }
}
