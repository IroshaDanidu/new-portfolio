import Image from 'next/image'
import React from 'react'
import ChatLayout from '@/components/chat/ChatLayout'
import Conversation from '@/components/chat/Conversation'
import ChatMessage from '@/components/chat/ChatMessage'

const SingleProject = () => {
    return (
        <ChatLayout title="Project">
          <Conversation>
            <ChatMessage variant="user" label="You">
                <p>Show me a case study of one of your projects.</p>
            </ChatMessage>

            <ChatMessage variant="assistant" label="Project">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-chat-muted">
                            BRANDING - BENTO STUDIO
                        </span>
                        <h1 className="text-2xl font-bold leading-tight text-chat-ink sm:text-3xl">
                            Beautiful design for brand new Business
                        </h1>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-chat-border shadow-soft">
                        <Image
                            width={1095}
                            height={1072}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            src={"/images/projects/single-project.jpg"}
                            alt="image"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="flex flex-col gap-4 md:col-span-1">
                            <Info label="Year" value="2024" />
                            <Info label="Client" value="Bento Studio" />
                            <Info label="Services" value="Web Design" />
                            <Info label="Project" value="Creative" />
                        </div>
                        <div className="flex flex-col gap-3 md:col-span-2">
                            <h2 className="text-lg font-semibold text-chat-ink">
                                Description
                            </h2>
                            <p className="text-sm leading-relaxed text-chat-ink/80">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.
                            </p>
                            <p className="text-sm leading-relaxed text-chat-ink/80">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[1, 2, 3, 4].map((n) => (
                            <div
                                key={n}
                                className="overflow-hidden rounded-2xl border border-chat-border shadow-soft"
                            >
                                <Image
                                    width={633}
                                    height={679}
                                    sizes='100%'
                                    style={{ width: "100%", height: "auto" }}
                                    src={`/images/projects/single-project${n}.jpg`}
                                    alt="gallery"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </ChatMessage>
          </Conversation>
        </ChatLayout>
    )
}

const Info = ({ label, value }) => (
    <div className="flex flex-col gap-0.5 rounded-2xl border border-chat-border bg-white p-3 shadow-soft">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-chat-muted">
            {label}
        </span>
        <span className="text-sm font-semibold text-chat-ink">{value}</span>
    </div>
)

export default SingleProject
