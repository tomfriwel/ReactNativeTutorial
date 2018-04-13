//
//  BluetoothManager.m
//  ReactNativeTutorial
//
//  Created by tomfriwel on 2018/4/13.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "BluetoothManager.h"
#import <React/RCTLog.h>

@implementation BluetoothManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(log:(NSString *)name number:(nonnull NSNumber *)number)
{
  RCTLogInfo(@"RCTLogInfo:My name is %@, number:%@", name, number);
}

@end
