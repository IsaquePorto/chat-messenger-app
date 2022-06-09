package com.unifacisa.sd.chat30.service;

import com.unifacisa.sd.chat30.models.Mensagem;
import com.unifacisa.sd.chat30.repository.MensagemRepository;

public class ChatService {

    private MensagemRepository mensagemRepository;

    public Mensagem salvarMensagem(Mensagem mensagem) {
        return mensagemRepository.persist(mensagem);
    }
}
