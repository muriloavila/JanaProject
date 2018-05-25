# Pull base image.
FROM ubuntu:14.04

# Install base software packages
RUN apt-get update && \
    apt-get install software-properties-common \
    python-software-properties \
    wget \
    curl \
    git \
    unzip -y && \
    apt-get clean


# ——————————
# Install Java.
# ——————————

RUN \
  echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java8-installer && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk8-installer


# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle


# ——————————
# Installs i386 architecture required for running 32 bit Android tools
# ——————————

RUN dpkg --add-architecture i386 && \
    apt-get update -y && \
    apt-get install -y libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get autoremove -y && \
    apt-get clean


# ——————————
# Installs Android SDK
# ——————————

ENV ANDROID_HOME /opt/android-sdk-linux
ENV ANDROID_SDK_TOOLS_FILENAME sdk-tools-linux-3859397.zip
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

RUN cd /opt && \
    wget -q https://dl.google.com/android/repository/${ANDROID_SDK_TOOLS_FILENAME} && \
    unzip ${ANDROID_SDK_TOOLS_FILENAME} -d ${ANDROID_HOME} && \
    rm ${ANDROID_SDK_TOOLS_FILENAME} && \
    yes | ${ANDROID_HOME}/tools/bin/sdkmanager --licenses && \
    ${ANDROID_HOME}/tools/bin/sdkmanager --sdk_root=${ANDROID_HOME} \
        "platform-tools" \
        "platforms;android-25" \
        "build-tools;26.0.2" \
        "extras;google;m2repository" \
        "extras;android;m2repository" \
        "extras;google;google_play_services" && \
    ${ANDROID_HOME}/tools/bin/sdkmanager --update --sdk_root=${ANDROID_HOME}

# ——————————
# Installs Gradle
# ——————————

# Gradle
ENV GRADLE_VERSION 4.4

RUN cd /usr/lib \
 && curl -fl https://downloads.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -o gradle-bin.zip \
 && unzip "gradle-bin.zip" \
 && ln -s "/usr/lib/gradle-${GRADLE_VERSION}/bin/gradle" /usr/bin/gradle \
 && rm "gradle-bin.zip"

# Set Appropriate Environmental Variables
ENV GRADLE_HOME /usr/lib/gradle
ENV PATH $PATH:$GRADLE_HOME/bin


# ——————————
# Install Node and global packages
# ——————————
ENV NODE_VERSION 8.9.2
RUN cd && \
    wget -q http://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
    tar -xzf node-v${NODE_VERSION}-linux-x64.tar.gz && \
    mv node-v${NODE_VERSION}-linux-x64 /opt/node && \
    rm node-v${NODE_VERSION}-linux-x64.tar.gz
ENV PATH ${PATH}:/opt/node/bin


# ——————————
# Install Basic React-Native packages
# ——————————
RUN npm install react-native-cli -g
RUN npm install rnpm -g

ENV LANG en_US.UTF-8

# ——————————
# Install udev rules for most android devices
# ——————————
RUN cd /etc/udev/rules.d/ && wget https://raw.githubusercontent.com/M0Rf30/android-udev-rules/master/51-android.rules

